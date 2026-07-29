const tones = {
  /* #0b1c2d — fundo base da página */
  base: 'bg-navy-900',
  /* #1f3a56 — seções alternadas, cria o ritmo escuro/claro da página */
  surface: 'bg-navy-700',
}

/** Container padrão das seções: largura de leitura, respiro vertical e título opcional. */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = 'left',
  tone = 'base',
  className = '',
}) {
  const centered = align === 'center'

  return (
    <section id={id} className={`px-5 py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-content">
        {(eyebrow || title || description) && (
          <header
            className={`mb-12 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-medium tracking-wide text-gold-300 uppercase">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="text-3xl sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg text-navy-200">{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
