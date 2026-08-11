import { site } from '../config/site'
import { WhatsappButton } from '../components/common/WhatsappButton'
import { buttonClass } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { Photo } from '../components/ui/Photo'
import heroImage from '../assets/hero.webp'

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

          {/* Formulação em pergunta, e não em afirmação: não pressupõe que o
              visitante teve um direito violado (Provimento 205/2021 da OAB). */}
          <h1 className="text-4xl leading-tight sm:text-5xl">
            Seu direito foi desrespeitado por uma empresa ou em uma relação
            contratual?
          </h1>

          <p className="mt-6 text-lg text-navy-200">
            Advogada de Direito do Consumidor e Direito Civil em {site.city}:
            cobranças indevidas, negativação indevida, fraude bancária, plano de
            saúde, divórcio e conflitos contratuais. Você recebe uma análise jurídica
            clara sobre seu caso, os direitos envolvidos e as alternativas possíveis
            antes de decidir os próximos passos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              Enviar pelo formulário
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

        {/* Ilustração da advocacia: escondida no mobile para não empurrar o CTA para baixo da dobra. */}
        <div className="hidden md:block">
          <Photo
            src={heroImage}
            alt="Balança e martelo sobre uma mesa, simbolizando advocacia, com uma janela desfocada ao fundo."
            monogram="N"
            priority
            ratio="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}
