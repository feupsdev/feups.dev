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
    id: 'nexora-one',
    name: 'NEXORA ONE',
    type: 'Experiência interativa 3D',
    status: 'Online',
    description:
      'Landing page conceitual de smartphone premium, com configurador interativo de cores, visualização do aparelho em 3D e interface dinâmica.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'React Three Fiber', 'Drei', 'Blender'],
    url: 'https://nexora-three-tau-14.vercel.app/',
  } ,
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
  name: 'Baymax',
  type: 'Assistente virtual com IA',
  status: 'Protótipo',
  description:
    'Chatbot de enfermagem pediátrica com inteligência artificial, desenvolvido para oferecer informações gerais sobre cuidados com bebês e crianças, por meio de uma interface interativa e acolhedora.',
  tech: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'Gemini API', 'Docker'],
  url: 'https://baymaxbot.onrender.com/', // Adicionar após publicar
},

{
  id: 'hollowmovie',
  name: 'HollowMovie',
  type: 'Plataforma de filmes e séries',
  status: 'Online',
  description: 'Plataforma de descoberta de filmes e séries integrada à API TMDB.',
  tech: ['HTML', 'CSS', 'JavaScript', 'TMDB API'],
  url: 'https://hollowmovie.netlify.app/',
  preview: {
    embed: 'auto',
  },
},

    {
      id: 'marola',
      name: 'Marola',
      type: 'Gestão financeira',
      status: 'Protótipo',
      description:
        'Plataforma de gestão financeira para micro e pequenas empresas, com foco na organização do fluxo de caixa e controle de movimentações via Pix.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      url: 'https://marola-finance.vercel.app/', 
    },
]
