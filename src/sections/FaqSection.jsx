import { Section } from '../components/layout/Section'
import { faqGroups } from '../data/faq'

export function FaqSection() {
  return (
    <Section
      id="faq"
      eyebrow="Dúvidas frequentes"
      title="Perguntas que mais recebemos"
      description="Respostas gerais e informativas. Cada caso tem particularidades que só a análise da documentação revela."
    >
      <div className="flex flex-col gap-10">
        {faqGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-4 text-xl">{group.label}</h3>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {group.items.map((item) => (
                <details key={item.id} className="group py-4">
                  <summary
                    className="flex cursor-pointer items-center justify-between gap-4
                               font-medium text-white marker:content-none hover:text-gold-200"
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-gold-300 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-navy-200">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
