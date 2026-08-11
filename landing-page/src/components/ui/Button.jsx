/**
 * Estilos de botão em um único lugar — CTAs aparecem em 7 pontos da página
 * (header, hero, áreas, faixa de CTA, contato, footer, flutuante) e precisam
 * ser idênticos.
 *
 * `primary` é dourado, não verde: o verde é a cor do canal WhatsApp e fica
 * reservado ao botão flutuante, senão a página inteira vira uma parede verde
 * e o acento perde função de hierarquia.
 */
// `whitespace-nowrap`: rótulos de CTA são frases curtas ("Enviar meu caso pelo
// formulário"). Quebrar em duas linhas deixa o botão com altura diferente do
// vizinho e desalinha o ícone — em telas estreitas o container é que quebra.
const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg ' +
  'font-medium transition-colors duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-gold-300'

/*
 * A borda transparente do primary/whatsapp não é decorativa: o `outline` tem
 * borda de 1px, e sem ela os botões preenchidos ficavam 2px mais baixos que o
 * vizinho quando aparecem em par (hero e faixa de CTA).
 */
const variants = {
  primary:
    'border border-transparent bg-gold-400 text-navy-950 ' +
    'shadow-sm shadow-navy-950/40 hover:bg-gold-300 active:bg-gold-500',
  outline:
    'border border-white/25 text-white ' +
    'hover:border-white/60 hover:bg-white/5 active:bg-white/10',
  whatsapp:
    'border border-transparent bg-whatsapp text-white ' +
    'hover:bg-whatsapp-dark active:bg-whatsapp-dark',
  ghost: 'text-gold-300 underline underline-offset-4 hover:text-gold-200',
}

/*
 * `lg` fica em text-base, não text-lg: no hero os dois CTAs dividem uma coluna
 * de ~550px e, com 18px + px-8, a dupla passava de 630px e era comprimida.
 */
const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-7 py-3.5 text-base',
}

export function buttonClass({ variant = 'primary', size = 'md', className = '' } = {}) {
  // O ghost é um link de texto: padding de botão o descaracterizaria.
  const sizing = variant === 'ghost' ? '' : sizes[size]
  return `${base} ${variants[variant]} ${sizing} ${className}`
}
