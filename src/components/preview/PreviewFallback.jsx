import { ArrowUpRight, Hammer, ShieldAlert, WifiOff } from 'lucide-react'

const COPY = {
  unpublished: {
    Icon: Hammer,
    title: 'Ainda sem versão pública',
    text: 'Este projeto está em desenvolvimento e ainda não tem um endereço publicado para visualizar.',
  },
  blocked: {
    Icon: ShieldAlert,
    title: 'Este site não permite ser exibido aqui',
    text: 'Por segurança, o site de origem bloqueia a incorporação em outras páginas. Respeitamos essa proteção: abra o projeto original para ver tudo funcionando.',
  },
  failed: {
    Icon: WifiOff,
    title: 'Não foi possível carregar a prévia',
    text: 'O site demorou demais para responder ou está indisponível agora. Tente recarregar ou abra o original em uma nova aba.',
  },
}

export default function PreviewFallback({ kind, project, onRetry }) {
  const { Icon, title, text } = COPY[kind]
  return (
    <div className="grid h-full w-full place-items-center bg-[radial-gradient(70%_80%_at_20%_10%,rgba(103,61,230,0.28),transparent)] p-5 text-center">
      <div className="max-w-sm">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-purple">
          <Icon size={20} aria-hidden="true" />
        </span>
        <p className="mt-3 text-base font-bold text-white">{title}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">{text}</p>
        {project.url && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {onRetry && kind === 'failed' && (
              <button type="button" onClick={onRetry} className="btn-ghost !min-h-[44px]">
                Tentar novamente
              </button>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !min-h-[44px]"
              aria-label={`Abrir ${project.name} em nova aba`}
            >
              Abrir site original <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
