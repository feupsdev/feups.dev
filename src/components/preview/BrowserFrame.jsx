import { ArrowLeft, ArrowRight, ArrowUpRight, Lock, Maximize2, RotateCw, TriangleAlert } from 'lucide-react'

const iconBtn =
  'grid h-10 w-10 shrink-0 place-items-center rounded-lg text-zinc-400 transition hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-40 sm:h-8 sm:w-8'

// Moldura de navegador. Os botões de voltar/avançar e os três pontos são decorativos;
// recarregar, ampliar e abrir o original são funcionais.
export default function BrowserFrame({
  host,
  secure = true,
  url,
  name,
  loading = false,
  onReload,
  onExpand,
  hideExpand = false,
  className = '',
  children,
}) {
  return (
    <div className={`flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c] shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-2.5 py-1.5 sm:px-3">
        <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="hidden items-center text-zinc-600 sm:flex" aria-hidden="true">
          <ArrowLeft size={15} />
          <ArrowRight size={15} />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] text-zinc-400 sm:text-xs">
          {secure ? (
            <Lock size={12} className="shrink-0 text-zinc-500" aria-hidden="true" />
          ) : (
            <TriangleAlert size={12} className="shrink-0 text-amber-300" aria-hidden="true" />
          )}
          <span className="truncate">{host}</span>
        </div>

        {onReload && (
          <button type="button" onClick={onReload} className={iconBtn} aria-label={`Recarregar prévia de ${name}`} title="Recarregar prévia">
            <RotateCw size={15} className={loading ? 'animate-spin' : ''} />
          </button>
        )}
        {onExpand && !hideExpand && (
          <button type="button" onClick={onExpand} className={iconBtn} aria-label={`Ampliar prévia de ${name}`} title="Ampliar">
            <Maximize2 size={15} />
          </button>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={iconBtn}
            aria-label={`Abrir ${name} em nova aba`}
            title="Abrir original em nova aba"
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
      {children}
    </div>
  )
}
