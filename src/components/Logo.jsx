// Marca "F" (SVG recriado a partir da logo) + wordmark feups.dev.
// variant: 'solid' (roxo elétrico) | 'light' (branco) | 'lilac' | 'outline' (só contorno)
const PATHS = [
  'M0 125C8 50 50 2 100 2H310L245 63H120C60 63 25 90 0 125Z',
  'M28 310V185C28 125 62 92 125 92H270L200 170H142V222L28 310Z',
]
const FILL = { solid: '#673DE6', light: '#FFFFFF', lilac: '#A78BFA' }

export function LogoMark({ className = 'h-9 w-9', variant = 'solid' }) {
  const outline = variant === 'outline'
  return (
    <svg viewBox="0 0 310 310" className={className} aria-hidden="true" focusable="false">
      {PATHS.map((d) => (
        <path
          key={d}
          d={d}
          fill={outline ? 'none' : FILL[variant]}
          stroke={outline ? 'currentColor' : 'none'}
          strokeWidth={outline ? 3 : 0}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  )
}

export default function Logo({ className = '', markClass = 'h-8 w-8', textClass = 'text-xl' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClass} variant="lilac" />
      <span className={`font-display font-extrabold leading-none tracking-tight text-white ${textClass}`}>
        feups<span className="text-brand-lilac">.dev</span>
      </span>
    </span>
  )
}
