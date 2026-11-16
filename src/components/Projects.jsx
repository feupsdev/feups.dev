import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import LivePreview from './preview/LivePreview'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos" className="section-y relative bg-panel">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Projetos</p>
          <h2 className="h2 mt-4">
            Projetos <span className="text-brand-purple">ao vivo</span>, não prints.
          </h2>
          <p className="mt-5 text-zinc-300 sm:text-lg">
            Cada prévia carrega o site publicado. Amplie, navegue ou abra o original.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.id} delay={i * 90} className="card card-hover">
              <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                <LivePreview project={p} />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-lilac">{p.type}</span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                      p.url
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                        : 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="display mt-3 text-3xl">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Tecnologias de ${p.name}`}>
                  {p.tech.length > 0 ? (
                    p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-200"
                      >
                        {t}
                      </li>
                    ))
                  ) : (
                    <li className="text-xs text-zinc-500">Stack em definição</li>
                  )}
                </ul>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost mt-6 !min-h-[44px]"
                    aria-label={`Abrir ${p.name} em nova aba`}
                  >
                    Abrir projeto original <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
