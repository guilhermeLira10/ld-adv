/**
 * Estilos de botão em um único lugar — CTAs aparecem em 7 pontos da página
 * (header, hero, áreas, faixa de CTA, contato, footer, flutuante) e precisam
 * ser idênticos.
 *
 * `primary` é dourado, não verde: o verde é a cor do canal WhatsApp e fica
 * reservado ao botão flutuante, senão a página inteira vira uma parede verde
 * e o acento perde função de hierarquia.
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-gold-300'

const variants = {
  primary: 'bg-gold-400 text-navy-950 hover:bg-gold-300',
  outline: 'border border-white/25 text-white hover:border-white/60 hover:bg-white/5',
  whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-dark',
  ghost: 'text-gold-300 underline underline-offset-4 hover:text-gold-200',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
}

export function buttonClass({ variant = 'primary', size = 'md', className = '' } = {}) {
  // O ghost é um link de texto: padding de botão o descaracterizaria.
  const sizing = variant === 'ghost' ? '' : sizes[size]
  return `${base} ${variants[variant]} ${sizing} ${className}`
}
