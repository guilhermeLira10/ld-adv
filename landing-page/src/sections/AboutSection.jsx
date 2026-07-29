import { Section } from '../components/layout/Section'
import { Icon } from '../components/ui/Icon'
import { Photo } from '../components/ui/Photo'
import { site } from '../config/site'

const facts = [
  { icon: 'check', term: 'Inscrição', value: site.oab },
  { icon: 'pin', term: 'Atendimento', value: `${site.city} e on-line` },
  { icon: 'scale', term: 'Áreas', value: 'Consumidor e Civil' },
]

export function AboutSection() {
  return (
    <Section id="sobre" tone="surface">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Photo
          src="/images/advogada.jpg"
          alt={`${site.lawyer}, advogada — ${site.oab}`}
          monogram="N"
          ratio="aspect-square"
        />

        <div>
          <p className="mb-3 text-sm font-medium tracking-wide text-gold-300 uppercase">
            Quem vai cuidar do seu caso
          </p>

          <h2 className="text-3xl sm:text-4xl">{site.lawyer}</h2>
          <p className="mt-2 font-medium text-gold-200">{site.oab}</p>

          {/* TODO: substituir pela bio revisada pela advogada. */}
          <p className="mt-5 text-lg text-navy-100">
            Advogada com atuação em Direito do Consumidor e Direito Civil, focada na
            defesa de quem enfrenta abusos, cobranças indevidas e falhas na prestação
            de serviços. O atendimento é direto e sem juridiquês: você entende o que
            está em jogo, quais são os prazos e o que esperar de cada caminho.
          </p>

          <p className="mt-4 text-navy-200">
            A condução de cada caso é ética e estratégica: começa pela análise da
            documentação e segue para a definição do melhor caminho — a via
            extrajudicial, quando ela resolve mais rápido, ou a ação judicial, quando
            necessária.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.term}
                className="rounded-lg border border-white/10 bg-navy-800/60 p-4"
              >
                <dt className="flex items-center gap-2 text-xs text-navy-300 uppercase">
                  <Icon name={fact.icon} className="size-4 text-gold-300" />
                  {fact.term}
                </dt>
                <dd className="mt-1.5 font-medium text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
