// Para adicionar um projeto, inclua um novo objeto neste array.
//
// Campos principais
//   id           identificador único (também usado pela verificação de incorporação)
//   url          endereço publicado do projeto — é o que o Live Preview carrega no iframe.
//                Deixe null quando o projeto ainda não está publicado (o card mostra um aviso honesto).
//
// Campo opcional `preview` (tudo é opcional; veja os padrões em src/lib/preview.js)
//   embed        'auto' (padrão) | 'blocked' | 'allowed'
//                  auto    -> usa o resultado de `npm run check:embed` (roda automaticamente no build)
//                  blocked -> não tenta o iframe e mostra o fallback
//                  allowed -> ignora a verificação e tenta carregar mesmo assim
//   viewport     { width, height } em que o site é renderizado antes de ser reduzido no card
//   mobileWidth  largura do modo "Celular" no modal
//
// Não há imagens estáticas: a prévia é sempre o site publicado.

export const projects = [
  {
    id: 'kakaupet',
    name: 'KakauPet',
    type: 'E-commerce',
    status: 'Online',
    description:
      'Projeto de e-commerce pet desenvolvido do zero, com interface responsiva e navegação pensada para facilitar a compra.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://kakaupets.onrender.com/',
  },
  {
    id: 'baymax',
    name: 'BayMax',
    type: 'Projeto experimental',
    status: 'Em desenvolvimento',
    description:
      'Interface de assistente virtual em desenvolvimento. Um projeto experimental ainda em construção, sem versão pública.',
    tech: [],
    url: null,
  },
    {
    id: 'kakaupet',
    name: 'KakauPet',
    type: 'E-commerce',
    status: 'Online',
    description:
      'Projeto de e-commerce pet desenvolvido do zero, com interface responsiva e navegação pensada para facilitar a compra.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://kakaupets.onrender.com/',
  },
    {
    id: 'kakaupet',
    name: 'KakauPet',
    type: 'E-commerce',
    status: 'Online',
    description:
      'Projeto de e-commerce pet desenvolvido do zero, com interface responsiva e navegação pensada para facilitar a compra.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://kakaupets.onrender.com/',
  },
    {
    id: 'kakaupet',
    name: 'KakauPet',
    type: 'E-commerce',
    status: 'Online',
    description:
      'Projeto de e-commerce pet desenvolvido do zero, com interface responsiva e navegação pensada para facilitar a compra.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    url: 'https://kakaupets.onrender.com/',
  },
]
