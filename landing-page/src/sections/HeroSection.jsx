import { site } from '../config/site'
import { WhatsappButton } from '../components/common/WhatsappButton'
import { buttonClass } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Photo } from '../components/ui/Photo'

const trustMarkers = [
  { icon: 'check', label: site.oab },
  { icon: 'clock', label: 'Resposta em horário comercial' },
  { icon: 'pin', label: `Atendimento em ${site.city} e on-line` },
]

export function HeroSection() {
  return (
    <section id="top" className="bg-navy-900 px-5 py-16 sm:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium tracking-wide text-gold-300 uppercase">
            {site.tagline}
          </p>

          <h1 className="text-4xl leading-tight sm:text-5xl">
            Seu direito foi violado por uma empresa ou por um contrato?
          </h1>

          <p className="mt-6 text-lg text-navy-200">
            Atendimento em Direito do Consumidor e Direito Civil: cobranças indevidas,
            negativação, fraudes bancárias, planos de saúde, divórcio e conflitos
            contratuais. Você recebe uma análise clara do seu caso e dos caminhos
            possíveis antes de decidir qualquer coisa.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsappButton size="lg" className="max-sm:w-full">
              Falar com a advogada
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

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-300">
            {trustMarkers.map((marker) => (
              <li key={marker.label} className="flex items-center gap-2">
                <Icon name={marker.icon} className="size-4 text-gold-300" />
                {marker.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorativa: escondida no mobile para não empurrar o CTA para baixo da dobra. */}
        <div className="hidden md:block">
          <Photo
            src="/images/hero.jpg"
            alt=""
            monogram="N"
            priority
            ratio="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}
