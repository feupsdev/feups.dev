import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const items = [
  { title: 'Design pensado para cada negócio', text: 'Identidade visual própria, sem cara de template.' },
  { title: 'Experiência adaptada a dispositivos', text: 'Pensado para funcionar bem em qualquer tela.' },
  { title: 'Código organizado', text: 'Estrutura limpa, fácil de manter e evoluir.' },
  { title: 'Foco na experiência do usuário', text: 'Navegação clara que leva o visitante à ação.' },
  { title: 'Comunicação direta', text: 'Conversa simples, sem intermediários.' },
  { title: 'Desenvolvimento personalizado', text: 'Cada projeto parte da realidade do seu cliente.' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="h2 mt-4">
            Feito por quem <span className="text-brand-purple">assina</span> o resultado.
          </h2>
          <p className="mt-5 max-w-sm text-zinc-300 sm:text-lg">
            Estúdio independente: atendimento próximo e cuidado em cada detalhe do projeto.
          </p>
        </Reveal>

        <ul className="border-t border-white/10">
          {items.map(({ title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 50} className="group border-b border-white/10">
              <div className="flex items-start gap-4 py-6 transition-all duration-300 group-hover:pl-3 sm:gap-6 sm:py-8">
                <span className="w-8 shrink-0 pt-1.5 text-sm font-bold text-brand-lilac">0{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="display text-[clamp(1.25rem,3.6vw,2rem)] !leading-tight transition-colors group-hover:text-brand-lilac">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-zinc-400 sm:text-base">{text}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1.5 hidden shrink-0 -translate-x-2 text-brand-purple opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
