import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const base = 'group relative h-full overflow-hidden rounded-3xl p-6 transition duration-500 sm:p-9'
const num = 'font-display text-[5.5rem] font-extrabold leading-none sm:text-[7rem]'
const title = 'display mt-2 text-[clamp(1.9rem,5vw,3.25rem)]'

export default function Services() {
  return (
    <section id="servicos" className="section-y relative">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Serviços</p>
          <h2 className="h2 mt-4">
            Um site para cada <span className="text-brand-purple">momento</span> do seu negócio.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-12">
          {/* 01 — Landing Pages */}
          <Reveal className="lg:col-span-7">
            <article className={`${base} bg-brand-purple text-white hover:-translate-y-1`}>
              <span className={`${num} text-white/25`}>01</span>
              <h3 className={title}>Landing Pages</h3>
              <p className="mt-3 max-w-sm text-white/85">Uma página, um objetivo: apresentar sua oferta e gerar contato.</p>
              <div aria-hidden="true" className="mt-8 rounded-2xl bg-ink/30 p-5 sm:p-6">
                <div className="h-3 w-3/4 rounded-full bg-white" />
                <div className="mt-2 h-3 w-1/2 rounded-full bg-white" />
                <div className="mt-4 h-2 w-2/3 rounded-full bg-white/40" />
                <div className="mt-5 inline-flex h-9 items-center rounded-full bg-white px-5 text-xs font-bold text-ink transition group-hover:scale-105">
                  Quero saber mais
                </div>
              </div>
            </article>
          </Reveal>

          {/* 02 — Sites Institucionais */}
          <Reveal className="lg:col-span-5" delay={80}>
            <article className={`${base} border border-white/10 bg-graphite hover:-translate-y-1 hover:border-brand-lilac/60`}>
              <span className={`${num} outline-text`}>02</span>
              <h3 className={title}>Sites Institucionais</h3>
              <p className="mt-3 text-zinc-400">Presença profissional para empresas que querem ser levadas a sério.</p>
              <div aria-hidden="true" className="mt-8 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-20 rounded-xl border border-white/10 bg-ink/60 transition duration-500 group-hover:border-brand-lilac/50"
                    style={{ transitionDelay: `${i * 70}ms`, transform: undefined }}
                  >
                    <div className="m-3 h-2 w-1/2 rounded-full bg-brand-lilac/70" />
                    <div className="mx-3 h-1.5 w-3/4 rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* 03 — Sites Comerciais */}
          <Reveal className="lg:col-span-5">
            <article className={`${base} bg-white text-ink hover:-translate-y-1`}>
              <span className={`${num} text-ink/10`}>03</span>
              <h3 className={`${title} !text-ink`}>Sites Comerciais</h3>
              <p className="mt-3 text-zinc-600">Vitrine digital para apresentar produtos e facilitar o contato.</p>
              <div aria-hidden="true" className="mt-8 grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="h-16 rounded-lg bg-ink/[0.07] transition duration-500 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 60}ms` }} />
                    <div className="h-1.5 w-full rounded-full bg-brand-purple" />
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* 04 — Reformulação */}
          <Reveal className="lg:col-span-7" delay={80}>
            <article className={`${base} border border-white/10 bg-panel hover:-translate-y-1 hover:border-brand-purple/70`}>
              <span className={`${num} outline-text`}>04</span>
              <h3 className={title}>Reformulação de Sites</h3>
              <p className="mt-3 max-w-sm text-zinc-400">Seu site atual, com design, desempenho e experiência renovados.</p>
              <div aria-hidden="true" className="relative mt-8 h-28 overflow-hidden rounded-2xl border border-white/10 bg-ink">
                <div className="absolute inset-0 space-y-2 p-4 opacity-60">
                  <div className="h-2.5 w-full bg-zinc-600" />
                  <div className="h-2 w-2/3 bg-zinc-700" />
                  <div className="h-2 w-3/4 bg-zinc-700" />
                  <p className="pt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Antes</p>
                </div>
                <div className="absolute inset-y-0 right-0 w-1/2 space-y-2 bg-brand-purple p-4 transition-[width] duration-700 group-hover:w-[68%]">
                  <div className="h-2.5 w-full rounded-full bg-white" />
                  <div className="h-2 w-2/3 rounded-full bg-white/60" />
                  <div className="h-2 w-3/4 rounded-full bg-white/60" />
                  <p className="pt-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">Depois</p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 05 — Responsivo */}
          <Reveal className="lg:col-span-12">
            <article
              className={`${base} flex flex-col justify-between gap-8 border border-white/10 bg-ink hover:border-brand-lilac/60 sm:flex-row sm:items-end`}
            >
              <div>
                <span className={`${num} text-brand-purple`}>05</span>
                <h3 className={title}>Desenvolvimento Responsivo</h3>
                <p className="mt-3 max-w-md text-zinc-400">Interfaces pensadas para celulares, tablets e computadores.</p>
              </div>
              <div aria-hidden="true" className="flex items-end gap-3 self-start sm:self-end">
                <div className="h-28 w-44 rounded-xl border-2 border-white/25 transition duration-500 group-hover:border-brand-lilac sm:h-32 sm:w-56" />
                <div className="h-24 w-16 rounded-xl border-2 border-white/25 transition duration-500 group-hover:border-brand-lilac sm:h-28 sm:w-20" />
                <div className="h-16 w-9 rounded-lg border-2 border-brand-purple bg-brand-purple/20 sm:h-20 sm:w-11" />
              </div>
              <ArrowUpRight aria-hidden="true" className="absolute right-6 top-6 text-white/30 transition group-hover:text-brand-lilac" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
