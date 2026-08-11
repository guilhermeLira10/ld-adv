import { site, whatsappGreeting } from '../../config/site'
import { whatsappLink } from '../../lib/formatters'
import { WhatsappIcon } from '../ui/WhatsappIcon'

/**
 * Botão fixo no canto — mantém o canal principal sempre a um toque.
 * É o único ponto da página que usa o verde do WhatsApp: aqui a cor funciona
 * como reconhecimento imediato do canal, não como acento da marca.
 */
export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink(site.phone, whatsappGreeting)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center
                 rounded-full bg-whatsapp text-white shadow-lg shadow-navy-950/50
                 ring-1 ring-white/20 transition-transform hover:scale-105
                 focus-visible:scale-105"
      style={{
        // Evita que o botão fique sob a barra de gestos do iOS.
        marginBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <WhatsappIcon className="size-7" />
    </a>
  )
}
