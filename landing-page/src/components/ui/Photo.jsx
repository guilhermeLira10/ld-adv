import { useState } from 'react'

/**
 * Imagem com proporção fixa e degradê de base.
 *
 * O wrapper reserva o espaço antes do download (sem layout shift) e, se o
 * arquivo ainda não existir em `public/images/`, o degradê continua no lugar
 * em vez de mostrar o ícone de imagem quebrada. Isso permite publicar o
 * layout antes de o material fotográfico chegar.
 */
export function Photo({
  src,
  alt,
  ratio = 'aspect-[4/5]',
  monogram,
  priority = false,
  className = '',
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl bg-gradient-to-br
                  from-navy-700 via-navy-800 to-navy-950 ring-1 ring-white/10
                  ${ratio} ${className}`}
    >
      {monogram && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 flex items-center justify-center
                     font-serif text-7xl text-white/10 select-none"
        >
          {monogram}
        </span>
      )}

      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      )}
    </div>
  )
}
