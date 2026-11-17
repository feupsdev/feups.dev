import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Differentials from './components/Differentials'
import Process from './components/Process'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Marquee from './components/Marquee'

function handleAnchorNavigation(event) {
  const link = event.target.closest?.('a[href^="#"]')
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

  const hash = link.getAttribute('href')
  const targetId = hash?.slice(1)
  if (!targetId) return

  const target = document.getElementById(decodeURIComponent(targetId))
  if (!target) return

  event.preventDefault()

  if (window.location.hash !== hash) {
    window.history.pushState(null, '', hash)
  }

  // Aguarda o fechamento do menu mobile antes de iniciar a rolagem.
  window.requestAnimationFrame(() => {
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  })
}

export default function App() {
  return (
    <div onClick={handleAnchorNavigation}>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee items={['Landing Pages', 'Sites Institucionais', 'Sites Comerciais', 'Reformulação de Sites', 'Desenvolvimento Responsivo']} />
        <Services />
        <Projects />
        <Differentials />
        <Process />
        <Marquee variant="outline" items={['feupsdev', 'Estúdio independente', 'Desenvolvimento web']} />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
