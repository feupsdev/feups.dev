import { Asterisk } from 'lucide-react'

// Faixa em movimento. Decorativa (aria-hidden); o conteúdo é duplicado para o loop ser contínuo.
// variant: 'solid' (faixa roxa) | 'outline' (texto vazado sobre o fundo escuro)
export default function Marquee({ items, variant = 'solid', reverse = false }) {
  const solid = variant === 'solid'
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span
            className={`px-6 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-5xl ${
              solid ? 'text-white' : 'outline-text'
            }`}
          >
            {t}
          </span>
          <Asterisk size={30} className={solid ? 'text-ink' : 'text-brand-purple'} />
        </li>
      ))}
    </ul>
  )
  return (
    <div aria-hidden="true" className="overflow-hidden py-5 sm:py-8">
      <div className={`${solid ? '-rotate-1 scale-[1.04] bg-brand-purple py-4' : 'py-2'}`}>
        <div
          className="marquee-track flex w-max animate-marquee"
          style={reverse ? { animationDirection: 'reverse' } : undefined}
        >
          {row}
          {row}
        </div>
      </div>
    </div>
  )
}
