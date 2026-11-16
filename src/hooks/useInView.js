import { useEffect, useRef, useState } from 'react'

// Retorna [ref, inView]. Fica `true` quando o elemento chega perto da viewport e nunca volta a `false`
// (o iframe, depois de montado, permanece montado).
export default function useInView(rootMargin = '300px 0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return [ref, inView]
}
