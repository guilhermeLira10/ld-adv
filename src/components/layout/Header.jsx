import { useEffect, useState } from 'react'
import { site } from '../../config/site'
import { navLinks } from '../../constants/navigation'
import { WhatsappButton } from '../common/WhatsappButton'
import { Icon } from '../ui/Icon'

export function Header() {
  const [open, setOpen] = useState(false)

  // Esc fecha o menu — sem isso, quem navega por teclado fica preso nele.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-semibold text-white">
            {site.lawyer}
          </span>
          <span className="text-xs text-navy-300">{site.oab}</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-navy-100 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsappButton size="sm" className="max-sm:hidden">
            Falar no WhatsApp
          </WhatsappButton>
          <WhatsappButton size="sm" className="sm:hidden">
            WhatsApp
          </WhatsappButton>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="rounded-md border border-white/20 p-2 text-white
                       transition-colors hover:bg-white/10 md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </div>

      {/* Menu mobile: some do fluxo quando fechado para não ficar focável. */}
      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal (mobile)"
          className="border-t border-white/10 bg-navy-900 md:hidden"
        >
          <ul className="mx-auto flex max-w-content flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-navy-100
                             transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
