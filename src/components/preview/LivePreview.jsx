import { useEffect, useRef, useState } from 'react'
import { Maximize2 } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import LoadingOverlay from './LoadingOverlay'
import PreviewFallback from './PreviewFallback'
import PreviewModal from './PreviewModal'
import useInView from '../../hooks/useInView'
import useIframeLoad from '../../hooks/useIframeLoad'
import { IFRAME_SANDBOX, getHost, getPreviewConfig, isSecure, resolveEmbedMode } from '../../lib/preview'

// Prévia ao vivo dentro do card: o site publicado é renderizado em tamanho de desktop
// e reduzido (transform: scale) para caber. No card o iframe não recebe toques/cliques,
// para não "roubar" a rolagem da página no celular; o clique abre a visualização ampliada.
export default function LivePreview({ project }) {
  const mode = resolveEmbedMode(project)
  const cfg = getPreviewConfig(project)
  const { width: vw, height: vh } = cfg.viewport

  const [viewRef, inView] = useInView()
  const stageRef = useRef(null)
  const [scale, setScale] = useState(0.35)
  const [open, setOpen] = useState(false)
  const openerRef = useRef(null)

  const canEmbed = mode === 'try'
  const { state, attempt, onLoad, onError, reload } = useIframeLoad({
    enabled: canEmbed && inView,
    slowAfterMs: cfg.slowAfterMs,
    failAfterMs: cfg.failAfterMs,
  })

  useEffect(() => {
    const el = stageRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / vw))
    ro.observe(el)
    return () => ro.disconnect()
  }, [vw])

  const host = project.url ? getHost(project.url) : 'em-desenvolvimento'
  const failed = state === 'failed'
  const showIframe = canEmbed && inView && !failed
  const loading = canEmbed && state !== 'loaded' && !failed

  return (
    <div ref={viewRef}>
      <BrowserFrame
        host={host}
        secure={project.url ? isSecure(project.url) : true}
        url={project.url}
        name={project.name}
        loading={loading}
        onReload={canEmbed ? reload : undefined}
        onExpand={canEmbed ? () => setOpen(true) : undefined}
      >
        <div ref={stageRef} className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0c]">
          {!canEmbed && <PreviewFallback kind={mode} project={project} />}
          {canEmbed && failed && <PreviewFallback kind="failed" project={project} onRetry={reload} />}

          {showIframe && (
            <iframe
              key={attempt}
              src={project.url}
              title={`Prévia ao vivo de ${project.name}`}
              loading="lazy"
              sandbox={IFRAME_SANDBOX}
              tabIndex={-1}
              onLoad={onLoad}
              onError={onError}
              className={`absolute left-0 top-0 origin-top-left border-0 bg-white transition-opacity duration-500 ${
                state === 'loaded' ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ width: vw, height: vh, transform: `scale(${scale})`, pointerEvents: 'none' }}
            />
          )}

          {canEmbed && loading && <LoadingOverlay slow={state === 'slow'} />}

          {canEmbed && !failed && (
            <button
              type="button"
              ref={openerRef}
              onClick={() => setOpen(true)}
              aria-label={`Ampliar prévia de ${project.name}`}
              className="group absolute inset-0 z-10 flex items-end justify-end p-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 text-xs font-medium text-white opacity-100 backdrop-blur transition group-hover:border-brand-purple/60 group-hover:bg-brand-purple/80 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
                <Maximize2 size={13} aria-hidden="true" /> Ampliar
              </span>
            </button>
          )}
        </div>
      </BrowserFrame>

      {open && <PreviewModal project={project} onClose={() => setOpen(false)} returnFocusTo={openerRef} />}
    </div>
  )
}
