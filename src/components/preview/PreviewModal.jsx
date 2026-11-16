import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Monitor, Smartphone, X } from 'lucide-react'
import BrowserFrame from './BrowserFrame'
import LoadingOverlay from './LoadingOverlay'
import PreviewFallback from './PreviewFallback'
import useIframeLoad from '../../hooks/useIframeLoad'
import { IFRAME_SANDBOX, getHost, getPreviewConfig, isSecure } from '../../lib/preview'

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'

// Visualização ampliada: iframe interativo, alternância Desktop/Celular, Esc para fechar,
// bloqueio de rolagem do fundo e foco devolvido ao botão de origem ao fechar.
export default function PreviewModal({ project, onClose, returnFocusTo }) {
  const cfg = getPreviewConfig(project)
  const [device, setDevice] = useState('desktop')
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const { state, attempt, onLoad, onError, reload } = useIframeLoad({
    enabled: true,
    slowAfterMs: cfg.slowAfterMs,
    failAfterMs: cfg.failAfterMs,
  })

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const items = [...dialogRef.current.querySelectorAll(FOCUSABLE)]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const opener = returnFocusTo?.current
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [onClose, returnFocusTo])

  const failed = state === 'failed'
  const loading = state !== 'loaded' && !failed
  const isMobileDevice = device === 'mobile'

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-2 backdrop-blur-sm sm:p-5"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Prévia ampliada de ${project.name}`}
        className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col gap-2 sm:gap-3"
      >
        <div className="flex items-center justify-between gap-3 px-1">
          <p className="truncate text-sm font-semibold text-white sm:text-base">{project.name}</p>
          <div className="flex items-center gap-2">
            <div className="hidden rounded-lg border border-white/10 bg-white/[0.04] p-0.5 sm:flex" role="group" aria-label="Tamanho da tela">
              {[
                ['desktop', 'Desktop', Monitor],
                ['mobile', 'Celular', Smartphone],
              ].map(([id, label, Icon]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setDevice(id)}
                  aria-pressed={device === id}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    device === id ? 'bg-brand-purple text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon size={14} aria-hidden="true" /> {label}
                </button>
              ))}
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 bg-white/[0.05] text-white transition hover:bg-white/15"
              aria-label="Fechar visualização ampliada"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <BrowserFrame
          host={getHost(project.url)}
          secure={isSecure(project.url)}
          url={project.url}
          name={project.name}
          loading={loading}
          onReload={reload}
          hideExpand
          className="flex-1"
        >
          <div className="relative flex min-h-0 flex-1 justify-center bg-[#161616]">
            {failed ? (
              <PreviewFallback kind="failed" project={project} onRetry={reload} />
            ) : (
              <iframe
                key={attempt}
                src={project.url}
                title={`Prévia ampliada de ${project.name}`}
                sandbox={IFRAME_SANDBOX}
                onLoad={onLoad}
                onError={onError}
                className="h-full border-0 bg-white"
                style={{ width: isMobileDevice ? cfg.mobileWidth : '100%', maxWidth: '100%' }}
              />
            )}
            {loading && <LoadingOverlay slow={state === 'slow'} />}
          </div>
        </BrowserFrame>
      </div>
    </div>,
    document.body,
  )
}
