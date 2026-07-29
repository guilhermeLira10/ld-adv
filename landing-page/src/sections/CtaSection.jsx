import { WhatsappButton } from '../components/common/WhatsappButton'
import { buttonClass } from '../components/ui/Button'

/**
 * Faixa de conversão entre a bio e o FAQ — capta quem já se convenceu e não
 * precisa ler as dúvidas frequentes. Sem título de seção próprio no menu:
 * é um ponto de contato, não um assunto novo.
 */
export function CtaSection() {
  return (
    <section className="bg-navy-900 px-5 py-16 sm:py-24">
      <div
        className="mx-auto max-w-content rounded-lg border border-gold-400/25
                   bg-navy-800/60 px-6 py-12 text-center sm:px-12"
      >
        <h2 className="text-3xl sm:text-4xl">Precisa de orientação jurídica?</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-200">
          Entre em contato e receba um atendimento profissional e responsável. Sua
          mensagem é tratada com sigilo e respondida em horário comercial.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <WhatsappButton size="lg" className="max-sm:w-full">
            Atendimento via WhatsApp
          </WhatsappButton>

          <a
            href="#contato"
            className={buttonClass({
              variant: 'outline',
              size: 'lg',
              className: 'max-sm:w-full',
            })}
          >
            Enviar meu caso pelo formulário
          </a>
        </div>
      </div>
    </section>
  )
}
