import { useCallback, useEffect, useRef, useState } from 'react'

// Controla o ciclo de vida da prévia: loading -> (slow) -> loaded | failed.
// `reload()` remonta o iframe (via `key`), o que faz o navegador buscar a versão publicada novamente.
export default function useIframeLoad({ enabled, slowAfterMs, failAfterMs }) {
  const [state, setState] = useState('loading')
  const [attempt, setAttempt] = useState(0)
  const stateRef = useRef(state)
  stateRef.current = state

  useEffect(() => {
    if (!enabled) return
    setState('loading')
    const slow = setTimeout(() => {
      if (stateRef.current === 'loading') setState('slow')
    }, slowAfterMs)
    const fail = setTimeout(() => {
      if (stateRef.current !== 'loaded') setState('failed')
    }, failAfterMs)
    return () => {
      clearTimeout(slow)
      clearTimeout(fail)
    }
  }, [enabled, attempt, slowAfterMs, failAfterMs])

  const onLoad = useCallback(() => setState('loaded'), [])
  const onError = useCallback(() => setState('failed'), [])
  const reload = useCallback(() => setAttempt((n) => n + 1), [])

  return { state, attempt, onLoad, onError, reload }
}
