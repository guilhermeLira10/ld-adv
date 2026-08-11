import { Section } from '../components/layout/Section'
import { Icon } from '../components/ui/Icon'
import { practiceGroups } from '../data/practiceAreas'

export function PracticeAreasSection() {
  return (
    <Section
      id="atuacao"
      eyebrow="Atuação"
      title="Em que podemos ajudar"
      description="Principais áreas de atuação, em situações de abuso, falha na prestação de serviços e descumprimento do contrato ou da legislação. Se o seu caso não estiver na lista, envie sua dúvida — avaliamos igualmente."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {practiceGroups.map((group) => (
          <article
            key={group.id}
            className="rounded-lg border border-white/10 bg-navy-800/60 p-7
                       transition-colors hover:border-white/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gold-400/10 text-gold-300">
                <Icon name={group.icon} className="size-5" />
              </span>
              <h3 className="text-xl">{group.label}</h3>
            </div>

            <p className="mt-3 text-sm text-navy-200">{group.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-full border border-white/10 bg-navy-900/60 px-3 py-1.5 text-sm text-navy-100"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
