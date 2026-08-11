import { site } from '../../config/site'
import { navLinks } from '../../constants/navigation'
import { WhatsappButton } from '../common/WhatsappButton'
import { Icon } from '../ui/Icon'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-white">{site.lawyer}</p>
          <p className="mt-1 text-sm text-navy-300">{site.oab}</p>
          <p className="mt-3 text-sm text-navy-200">{site.tagline}</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-semibold text-white">Navegação</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-navy-200 hover:text-gold-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white">Contato</h2>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li>
              <WhatsappButton variant="ghost">WhatsApp</WhatsappButton>
            </li>
            <li className="flex items-center gap-2 text-navy-200">
              <Icon name="phone" className="size-4 text-navy-400" />
              <a
                href={`tel:+55${site.phone.replace(/\D/g, '')}`}
                className="hover:text-gold-300"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-navy-200">
              <Icon name="mail" className="size-4 text-navy-400" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-navy-200">
              <Icon name="pin" className="size-4 text-navy-400" />
              {site.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6">
        <p className="mx-auto max-w-content text-xs text-navy-400">
          Este site tem caráter meramente informativo, em conformidade com o Código de
          Ética e Disciplina da OAB e o Provimento 205/2021. Não constitui oferta de
          serviços, captação de clientela ou promessa de resultado.
        </p>
      </div>
    </footer>
  )
}
