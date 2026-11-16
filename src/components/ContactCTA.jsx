import { MessageCircle, Instagram, Mail, ArrowRight , Twitter } from 'lucide-react'
import Reveal from './Reveal'
import { site, quote, hasWhatsApp, hasEmail, whatsappUrl, emailUrl } from '../config/site'

function ContactCard({ icon: Icon, label, value, href, external, disabledText }) {
  const body = (
    <>
      <span className="grid w-12 h-12 text-white rounded-full shrink-0 place-items-center bg-brand-purple">
        <Icon size={21} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold tracking-widest uppercase text-zinc-400">{label}</span>
        <span className="block text-lg font-bold text-white truncate font-display">{href ? value : disabledText}</span>
      </span>
    </>
  )
  const cls = 'card flex items-center gap-4 p-4'
  return href ? (
    <a href={href} className={`${cls} card-hover`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {body}
    </a>
  ) : (
    <div className={`${cls} opacity-70`} aria-disabled="true">
      {body}
    </div>
  )
}

export default function ContactCTA() {
  return (
    <>
      <section className="px-3 pb-6 sm:px-6">
        <Reveal className="relative mx-auto max-w-[80rem] overflow-hidden rounded-[2rem] bg-brand-purple px-6 py-16 sm:rounded-[3rem] sm:px-14 sm:py-24">
          <div aria-hidden="true" className="absolute rounded-full -right-24 -top-24 h-72 w-72 bg-brand-lilac/40 blur-3xl" />
          <div aria-hidden="true" className="absolute rounded-full -bottom-32 left-10 h-72 w-72 bg-ink/40 blur-3xl" />
          <div className="relative max-w-4xl">
            <h2 className="display text-[clamp(2.1rem,7.6vw,5rem)]">
              Vamos criar algo que faça seu negócio ser <span className="text-ink">lembrado?</span>
            </h2>
            <p className="max-w-xl mt-6 text-lg text-white/90">
              Conte um pouco sobre o seu projeto e peça seu orçamento.
            </p>
            <a href={quote.href} target="_blank" rel="noopener noreferrer" className="w-full btn-light group mt-9 sm:w-auto">
              <MessageCircle size={19} /> {quote.label}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contato" className="section-y">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Contato</p>
            <h2 className="h2 mt-4 !text-[clamp(1.9rem,5vw,3rem)]">Escolha o melhor canal</h2>
          </Reveal>
          <div className="grid gap-4 mt-8 md:grid-cols-3">
            <Reveal>
              <ContactCard icon={MessageCircle} label="WhatsApp" value="Iniciar conversa" href={hasWhatsApp ? whatsappUrl : null} external disabledText="Em breve" />
            </Reveal>
            <Reveal delay={80}>
              <ContactCard icon={Instagram} label="Instagram" value={site.instagramHandle} href={site.instagram} external />
            </Reveal>
              <Reveal delay={80}>
              <ContactCard icon={Twitter} label="Twitter" value={site.twitterHandle} href={site.twitter} external />
            </Reveal>
            <Reveal delay={160}>
              <ContactCard icon={Mail} label="E-mail" value={site.email} href={hasEmail ? emailUrl : null} disabledText="Em breve" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
