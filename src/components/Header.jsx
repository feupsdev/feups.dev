import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { site } from '../config/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu com ESC e trava a rolagem do body quando aberto
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#inicio" aria-label="feupsdev — início" onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-brand-lilac"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-primary hidden !min-h-[42px] !px-5 md:inline-flex">
            Solicitar orçamento
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`md:hidden ${open ? 'block' : 'hidden'} h-[calc(100dvh-4rem)] overflow-y-auto bg-ink/95 backdrop-blur-xl`}
      >
        <nav aria-label="Menu mobile" className="container-x flex flex-col gap-1 py-6">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-white/10 px-1 py-5 font-display text-3xl font-extrabold tracking-tight text-white transition hover:text-brand-lilac"
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" onClick={close} className="btn-primary mt-4">
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
