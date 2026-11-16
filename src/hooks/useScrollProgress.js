import { useEffect } from 'react'

// Grava em `--p` (0–1) quanto do elemento já foi percorrido pela rolagem. Com movimento reduzido, fica em 1.
export default function useScrollProgress(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '1')
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const p = (window.innerHeight * 0.65 - r.top) / r.height
      el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [ref])
}
