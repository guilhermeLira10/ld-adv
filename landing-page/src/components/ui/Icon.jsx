/**
 * Ícones inline em SVG — evita uma dependência de fonte de ícones (o mockup
 * carregava ~100 kB de Font Awesome pelo CDN para usar um chevron).
 * Todos com o mesmo grid de 24 e traço de 1.5 para leitura consistente.
 */
const paths = {
  bank: (
    <>
      <path d="M3 10 12 4l9 6" />
      <path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9" />
      <path d="M3 20h18" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7.5a4.5 4.5 0 0 1 7 3c0 5.2-7 9.5-7 9.5" />
      <path d="M12 11v4M10 13h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  plane: <path d="M10.2 4.3a1.7 1.7 0 0 1 3.3 0L15 10l5.4 2.2a1 1 0 0 1 .6.9v1.2l-6-1.4-.7 4 2 1.6v1.2l-3.4-1-3.4 1v-1.2l2-1.6-.7-4-6 1.4v-1.2a1 1 0 0 1 .6-.9L9 10z" />,
  scale: (
    <>
      <path d="M12 4v16M8 20h8" />
      <path d="M5 8h14M12 4l7 4M12 4 5 8" />
      <path d="M5 8 2.5 14a2.5 2.5 0 0 0 5 0z" />
      <path d="M19 8l-2.5 6a2.5 2.5 0 0 0 5 0z" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  phone: (
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 13.1 9.9 20 18.3 20a1.6 1.6 0 0 0 1.7-1.6v-2a1 1 0 0 0-.8-1l-3-.6a1 1 0 0 0-1 .4l-1 1.3a13 13 0 0 1-5.7-5.7l1.3-1a1 1 0 0 0 .4-1l-.6-3a1 1 0 0 0-1-.8" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
}

export function Icon({ name, className = 'size-6' }) {
  const path = paths[name]
  if (!path) return null

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  )
}
