// Verifica se cada projeto publicado permite ser incorporado em iframe, lendo os cabeçalhos HTTP
// X-Frame-Options e Content-Security-Policy (frame-ancestors). Apenas LÊ os cabeçalhos — nada é contornado.
//
// Uso:
//   npm run check:embed            -> mostra o resultado no terminal
//   node scripts/check-embed.mjs --write
//                                   -> também grava src/data/embed-status.generated.json
//                                      (roda automaticamente antes do build, via "prebuild")
//
// Se o site não puder ser consultado (rede fora, servidor dormindo), o status fica "unknown"
// e o portfólio simplesmente tenta carregar o iframe. O build nunca falha por causa desta verificação.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const write = process.argv.includes('--write')
const siteOrigin = (process.env.SITE_ORIGIN || 'https://feupsdev.vercel.app').replace(/\/$/, '')
const siteHost = new URL(siteOrigin).host

const { projects } = await import(pathToFileURL(path.join(root, 'src/data/projects.js')).href)

function evaluate(headers) {
  const xfo = headers.get('x-frame-options')
  if (xfo) {
    const v = xfo.trim().toUpperCase()
    if (v.startsWith('DENY') || v.startsWith('SAMEORIGIN') || v.startsWith('ALLOW-FROM')) {
      return { status: 'blocked', reason: `X-Frame-Options: ${xfo}` }
    }
  }
  const csp = headers.get('content-security-policy') || ''
  const fa = csp
    .split(';')
    .map((d) => d.trim())
    .find((d) => d.toLowerCase().startsWith('frame-ancestors'))
  if (fa) {
    const sources = fa.split(/\s+/).slice(1).map((x) => x.toLowerCase())

    const ok = sources.some((src) => {
      if (src === "'self'") return false
      if (src === '*') return true
      if (src === siteOrigin.toLowerCase()) return true
      if (src === siteHost.toLowerCase()) return true
      if (src === 'https:') return true

      return false
    })

    if (!ok) {
      return { status: 'blocked', reason: `CSP: ${fa}` }
    }
  }

  return { status: 'embeddable', reason: null }
}

async function fetchHeaders(url) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(60_000), headers: { 'user-agent': 'feups.dev-embed-check' } })
      return res.headers
    } catch (err) {
      if (attempt === 2) throw err
    }
  }
}

const result = {}
for (const p of projects) {
  if (!p.url) continue
  try {
    const headers = await fetchHeaders(p.url)
    result[p.id] = { ...evaluate(headers), url: p.url, checkedAt: new Date().toISOString() }
  } catch (err) {
    result[p.id] = { status: 'unknown', reason: `não foi possível consultar (${err.cause?.code || err.message})`, url: p.url, checkedAt: new Date().toISOString() }
  }
  const r = result[p.id]
  console.log(`[embed] ${p.name}: ${r.status}${r.reason ? ` — ${r.reason}` : ''}`)
}

if (write) {
  const file = path.join(root, 'src/data/embed-status.generated.json')
  // Se a consulta falhou e já existe um resultado conhecido, preserva o anterior.
  let previous = {}
  try {
    previous = JSON.parse(await readFile(file, 'utf8'))
  } catch {}
  for (const [id, r] of Object.entries(result)) {
    if (r.status === 'unknown' && previous[id] && previous[id].status !== 'unknown') result[id] = previous[id]
  }
  await writeFile(file, JSON.stringify(result, null, 2) + '\n')
  console.log('[embed] resultado gravado em src/data/embed-status.generated.json')
}
