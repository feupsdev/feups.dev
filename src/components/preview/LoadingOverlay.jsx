import { Loader2 } from 'lucide-react'

// Indicação de carregamento. Depois de alguns segundos, explica a demora sem alarmar.
export default function LoadingOverlay({ slow = false }) {
  return (
    <div
      className="absolute inset-0 z-[5] grid place-items-center bg-[#0c0c0c] text-center"
      role="status"
      aria-live="polite"
    >
      <div className="px-6">
        <Loader2 size={22} className="mx-auto animate-spin text-brand-purple" aria-hidden="true" />
        <p className="mt-3 text-sm font-medium text-white">Carregando prévia…</p>
        {slow && (
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
            Está demorando mais que o normal. Alguns servidores levam um tempo para responder na primeira visita.
          </p>
        )}
      </div>
    </div>
  )
}
