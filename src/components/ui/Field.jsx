/**
 * Wrapper de campo: label, slot do controle e mensagem de erro.
 * `children` recebe os props de acessibilidade já resolvidos (id, aria-*).
 */
export function Field({ label, name, error, hint, children }) {
  const describedBy =
    [error && `${name}-error`, hint && `${name}-hint`].filter(Boolean).join(' ') ||
    undefined

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-navy-100">
        {label}
      </label>

      {children({
        id: name,
        'aria-invalid': error ? 'true' : undefined,
        'aria-describedby': describedBy,
      })}

      {hint && !error && (
        <p id={`${name}-hint`} className="text-xs text-navy-300">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${name}-error`} role="alert" className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

export const controlClass =
  'w-full rounded-md border border-white/15 bg-navy-800 px-3 py-2.5 text-white ' +
  'placeholder:text-navy-400 transition-colors ' +
  'hover:border-white/30 aria-invalid:border-red-400'
