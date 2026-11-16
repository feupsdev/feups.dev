import { ArrowRight, Instagram } from 'lucide-react'

// Botão social inspirado no MicroKit UI, usando o perfil já configurado no projeto.
export default function SocialIconButton({ href, label = 'Instagram do feups.dev' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-button"
      aria-label={label}
      title={label}
    >
      <span className="social-icon-button-swap" aria-hidden="true">
        <Instagram size={18} strokeWidth={1.8} />
      </span>
      <span className="social-icon-button-swap social-icon-button-arrow" aria-hidden="true">
        <ArrowRight size={17} strokeWidth={1.9} />
      </span>
    </a>
  )
}
