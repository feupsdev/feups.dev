import { useRef } from 'react'
import Reveal from './Reveal'
import useScrollProgress from '../hooks/useScrollProgress'

const steps = [
  { title: 'Briefing', text: 'Entender o negócio e os objetivos.' },
  { title: 'Planejamento', text: 'Definir estrutura, conteúdo e identidade visual.' },
  { title: 'Desenvolvimento', text: 'Transformar o planejamento em um site funcional.' },
  { title: 'Entrega', text: 'Revisar, testar e publicar o projeto.' },
]

// Linha do tempo vertical: a linha roxa "se desenha" conforme a rolagem; os números gigantes se preenchem no hover.
export default function Process() {
  const listRef = useRef(null)
  useScrollProgress(listRef)

  return (
    <section id="processo" className="section-y relative bg-panel">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Processo</p>
          <h2 className="h2 mt-4">
            Da primeira conversa ao site <span className="text-brand-purple">no ar</span>.
          </h2>
        </Reveal>

        <ol ref={listRef} className="relative mt-14 sm:mt-20">
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-white/10" />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-brand-purple"
            style={{ transform: 'scaleY(var(--p, 0))' }}
          />

          {steps.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={60} className="group relative pl-6 sm:pl-14">
              <div className="flex flex-col gap-1 pb-12 sm:flex-row sm:items-center sm:gap-10 sm:pb-16">
                <span
                  aria-hidden="true"
                  className="outline-text shrink-0 font-display sm:w-[clamp(11rem,27vw,19rem)] text-[clamp(5rem,18vw,10rem)] font-extrabold leading-[0.85] transition-colors duration-500 group-hover:!text-brand-purple group-hover:[-webkit-text-stroke-color:#673DE6]"
                >
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display text-[clamp(1.75rem,5vw,3rem)]">{title}</h3>
                  <p className="mt-2 max-w-sm text-zinc-300 sm:text-lg">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
