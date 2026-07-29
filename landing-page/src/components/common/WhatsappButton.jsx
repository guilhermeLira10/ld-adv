import { site, whatsappGreeting } from '../../config/site'
import { whatsappLink } from '../../lib/formatters'
import { buttonClass } from '../ui/Button'
import { WhatsappIcon } from '../ui/WhatsappIcon'

/** CTA de WhatsApp — canal principal de contato do site. */
export function WhatsappButton({
  variant = 'primary',
  size = 'md',
  message = whatsappGreeting,
  children = 'Falar no WhatsApp',
  className = '',
}) {
  return (
    <a
      href={whatsappLink(site.phone, message)}
      target="_blank"
      rel="noreferrer"
      className={buttonClass({ variant, size, className })}
    >
      <WhatsappIcon className={size === 'sm' ? 'size-4' : 'size-5'} />
      {children}
    </a>
  )
}
