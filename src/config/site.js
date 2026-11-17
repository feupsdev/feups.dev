// Configurações centralizadas do site.
// WhatsApp e e-mail são lidos de variáveis de ambiente (arquivo .env ou painel da Vercel).
// Nada aqui é inventado: se a variável estiver vazia, o site se adapta (veja helpers abaixo).

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '') // ex.: 5511999999999
const email = (import.meta.env.VITE_CONTACT_EMAIL || '').trim()

export const site = {
  name: 'feupsdev',
  tagline: 'Desenvolvimento web',
  description:
    'Estúdio independente de desenvolvimento web. Sites com identidade própria, feitos sob medida para cada negócio.',
  instagram: 'https://www.instagram.com/feupsdev/',
  instagramHandle: '@feupsdev',
  twitter: 'https://x.com/feupsdev/',
  linkedin: 'https://www.linkedin.com/in/felipe-henrique-07990228a/',
  linkedinHandle: 'Felipe Henrique',
  github: 'https://github.com/feupsdev',
  githubHandle: 'feupsdev',
  twitterHandle: '@feupsdev',
  whatsappNumber,
  whatsappMessage: 'Olá! Vim pelo site feupsdev e gostaria de solicitar um orçamento.',
  email: 'felipehenriquedsc@gmail.com',
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ],
}

export const hasWhatsApp = Boolean(whatsappNumber)
export const hasEmail = Boolean(email)

export const whatsappUrl = hasWhatsApp
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : null

export const emailUrl = hasEmail ? `mailto:${email}` : null

// Canal principal de orçamento: WhatsApp quando configurado; senão, Instagram.
export const quote = hasWhatsApp
  ? { href: whatsappUrl, label: 'Conversar pelo WhatsApp', channel: 'WhatsApp' }
  : { href: site.instagram, label: 'Conversar pelo Instagram', channel: 'Instagram' }
