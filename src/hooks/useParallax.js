import { useEffect } from 'react'

// Grava a posição de rolagem (0–1200) na variável CSS `--sy` do elemento, só enquanto ele está visível.
// Os filhos usam: transform: translate3d(0, calc(var(--sy, 0) * -0.1px), 0). Sem JS por frame de layout.
export default function useParallax(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let visible = true
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: '120px' })
    io.observe(el)
    const update = () => {
      raf = 0
      if (visible) el.style.setProperty('--sy', Math.min(window.scrollY, 1200).toFixed(0))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [ref])
}
