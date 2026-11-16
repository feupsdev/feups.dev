/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0C0C0C', // fundo principal
        graphite: '#242424', // superfícies e elementos secundários
        panel: '#161616',
        line: 'rgba(255,255,255,0.1)',
        brand: {
          purple: '#673DE6', // roxo elétrico — assinatura da marca
          lilac: '#A78BFA', // variações e detalhes
        },
      },
      fontFamily: {
        display: ['"Rethink Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rise: {
          from: { transform: 'translateY(108%)' },
          to: { transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        rise: 'rise 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'fade-up': 'fadeUp 0.8s ease-out both',
        marquee: 'marquee 38s linear infinite',
        'spin-slow': 'spinSlow 22s linear infinite',
      },
    },
  },
  plugins: [],
}
