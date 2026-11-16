import { useRef } from 'react'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { LogoMark } from './Logo'
import useParallax from '../hooks/useParallax'
import { quote } from '../config/site'

const par = (f) => ({ transform: `translate3d(0, calc(var(--sy, 0) * ${f}px), 0)` })

// Composição própria: camadas com a marca "F" ampliada, selo giratório e chips flutuantes.
function HeroArt() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[540px] lg:ml-auto" aria-hidden="true">
      <div className="absolute inset-[4%] rotate-[-7deg] rounded-[2.5rem] border border-white/10 bg-graphite" style={par(-0.04)}>
        <div className="grid-bg absolute inset-0 rounded-[2.5rem] opacity-70" />
      </div>

      <div
        className="absolute inset-[12%_6%_6%_14%] rotate-[4deg] overflow-hidden rounded-[2.5rem] bg-brand-purple shadow-[0_40px_90px_-30px_rgba(103,61,230,0.9)]"
        style={par(-0.09)}
      >
        <LogoMark variant="light" className="absolute -right-[8%] -top-[12%] h-[112%] w-[112%] opacity-95" />
        <LogoMark variant="outline" className="absolute -bottom-[30%] -left-[18%] h-[90%] w-[90%] text-white/40" />
      </div>

      <div className="absolute -right-2 -top-4 h-28 w-28 sm:h-32 sm:w-32" style={par(-0.16)}>
        <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
          <defs>
            <path id="badge-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
          </defs>
          <circle cx="60" cy="60" r="58" fill="#0C0C0C" stroke="rgba(255,255,255,0.15)" />
          <text fill="#A78BFA" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">
            <textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">ESTÚDIO INDEPENDENTE • DEV WEB •</textPath>
          </text>
        </svg>
        <ArrowDownRight className="absolute inset-0 m-auto text-white" size={26} />
      </div>

      <div
        className="absolute -left-2 bottom-[14%] hidden animate-float rounded-full border border-white/15 bg-ink px-4 py-2 text-xs font-semibold text-white shadow-xl sm:block"
        style={par(-0.13)}
      >
        Design sob medida
      </div>
      <div
        className="absolute bottom-[2%] right-[4%] hidden animate-float rounded-full bg-white px-4 py-2 text-xs font-bold text-ink shadow-xl sm:block"
        style={{ ...par(-0.07), animationDelay: '1.6s' }}
      >
        Código organizado
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  useParallax(ref)

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-36">
      <div aria-hidden="true" className="grid-bg absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-brand-purple/25 blur-[130px]"
      />

      <div className="container-x relative">
        <p className="eyebrow animate-fade-up">Estúdio independente de desenvolvimento web</p>

        <h1 className="display mt-6 text-[clamp(2.25rem,10.6vw,6.9rem)]">
          <span className="line">
            <span className="block animate-rise">Seu próximo</span>
          </span>
          <span className="line sm:pl-[12%]">
            <span className="block animate-rise" style={{ animationDelay: '0.12s' }}>
              site pode ser
            </span>
          </span>
          <span className="line">
            <span className="block animate-rise text-brand-purple" style={{ animationDelay: '0.24s' }}>
              extraordinário.
            </span>
          </span>
        </h1>

        <div className="mt-10 grid items-center gap-12 lg:mt-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg">
              Sites e landing pages com identidade própria, feitos sob medida para o seu negócio. Você fala direto
              com quem desenvolve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={quote.href} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                Solicitar orçamento
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#projetos" className="btn-ghost">
                Ver projetos ao vivo
              </a>
            </div>
          </div>

          <HeroArt />
        </div>
      </div>
    </section>
  )
}
