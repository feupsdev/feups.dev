// Helpers do Live Preview: valores padrão, resolução do modo de incorporação e utilidades de URL.
import embedStatus from '../data/embed-status.generated.json'

// Sandbox do iframe: permite o site funcionar normalmente na própria origem dele,
// sem dar acesso ao portfólio (o iframe é de outra origem) nem permitir navegar o topo da página.
export const IFRAME_SANDBOX =
  'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox'

export const PREVIEW_DEFAULTS = {
  // 'auto'    -> usa o resultado da verificação feita no build (scripts/check-embed.mjs)
  // 'blocked' -> força o fallback (use se souber que o site bloqueia iframes)
  // 'allowed' -> ignora a verificação e tenta carregar sempre
  embed: 'auto',
  // Tamanho "de desktop" em que o site é renderizado antes de ser reduzido para caber no card.
  viewport: { width: 1280, height: 800 },
  // Largura usada no modo "Celular" do modal.
  mobileWidth: 390,
  // Tempo (ms) até avisar que a prévia está demorando / falhou.
  slowAfterMs: 8000,
  failAfterMs: 45000,
}

export function getPreviewConfig(project) {
  const p = project.preview || {}
  return {
    ...PREVIEW_DEFAULTS,
    ...p,
    viewport: { ...PREVIEW_DEFAULTS.viewport, ...(p.viewport || {}) },
  }
}

// Retorna: 'unpublished' | 'blocked' | 'try'
// Observação: um iframe bloqueado por X-Frame-Options/CSP NÃO dispara evento de erro que o JavaScript
// consiga ler. Por isso a detecção é feita antes, por cabeçalhos HTTP (ver scripts/check-embed.mjs).
export function resolveEmbedMode(project) {
  if (!project.url) return 'unpublished'
  const { embed } = getPreviewConfig(project)
  if (embed === 'blocked') return 'blocked'
  if (embed === 'allowed') return 'try'
  const detected = embedStatus[project.id]?.status
  return detected === 'blocked' ? 'blocked' : 'try'
}

export function getBlockReason(project) {
  return embedStatus[project.id]?.reason || null
}

export function getHost(url) {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

export function isSecure(url) {
  try {
    return new URL(url).protocol === 'https:'
  } catch {
    return false
  }
}
