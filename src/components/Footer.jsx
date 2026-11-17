import { ArrowUp, Instagram, Twitter, Linkedin, Github  } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'
import { site } from '../config/site'

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-ink">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#inicio" aria-label="feupsdev — voltar ao início">
            <Logo />
          </a>
          <p className="max-w-sm mt-4 text-sm leading-relaxed text-zinc-300">{site.description}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-lilac">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm transition text-zinc-300 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
            <div>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-lilac">
                Redes
              </h2>

              <div className="flex flex-col items-start gap-4 mt-5">

                {/* Instagram */}
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm transition-colors duration-300 group text-zinc-400 hover:text-white"
                >
                  <Instagram
                    size={18}
                    className="transition-transform duration-300 shrink-0 group-hover:scale-110"
                  />
                  <span>{site.instagramHandle}</span>
                </a>

                {/* X */}
                <a
                  href={site.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm transition-colors duration-300 group text-zinc-400 hover:text-white"
                >
                  <FaXTwitter
                    size={18}
                    className="transition-transform duration-300 shrink-0 group-hover:scale-110"
                  />
                  <span>{site.twitterHandle}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm transition-colors duration-300 group text-zinc-400 hover:text-white"
                >
                  <Linkedin
                    size={18}
                    className="transition-transform duration-300 shrink-0 group-hover:scale-110"
                  />
                  <span>{site.linkedinHandle}</span>
                </a>

                {/* GitHub */}
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm transition-colors duration-300 group text-zinc-400 hover:text-white"
                >
                  <Github
                    size={18}
                    className="transition-transform duration-300 shrink-0 group-hover:scale-110"
                  />
                  <span>{site.githubHandle}</span>
                </a>

              </div>
</div>
      </div>

      <p
        aria-hidden="true"
        className="outline-text select-none whitespace-nowrap text-center font-display text-[clamp(3.5rem,19vw,15rem)] font-extrabold leading-[0.8] tracking-tighter"
      >
        feupsdev
      </p>

      <div className="mt-6 border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs container-x text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} feupsdev. Todos os direitos reservados.</p>
          <a
            href="#inicio"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-zinc-300 transition hover:text-white"
          >
            Voltar ao topo <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
