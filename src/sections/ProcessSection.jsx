import { Section } from '../components/layout/Section'

/**
 * Processo de atendimento em 4 passos — reduz o atrito de quem hesita em
 * mandar mensagem por não saber o que acontece depois. Descreve o
 * procedimento, sem prometer prazo ou resultado.
 */
const steps = [
  {
    title: 'Você entra em contato',
    description:
      'Pelo WhatsApp ou pelo formulário, com um breve resumo do que aconteceu.',
  },
  {
    title: 'A documentação é analisada',
    description:
      'Contratos, extratos, protocolos e conversas são examinados para identificar os direitos envolvidos.',
  },
  {
    title: 'Orientação jurídica inicial',
    description:
      'Você recebe uma explicação clara do cenário: o que a lei prevê, quais os prazos e quais os riscos.',
  },
  {
    title: 'Definimos a estratégia',
    description:
      'Em conjunto, escolhemos o caminho — extrajudicial ou judicial. Condições e honorários por escrito antes de qualquer contratação.',
  },
]

export function ProcessSection() {
  return (
    <Section
      id="como-funciona"
      tone="surface"
      eyebrow="Atendimento"
      title="Como funciona"
      description="Do primeiro contato à definição da estratégia, sem etapa nenhuma acontecendo às suas costas."
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-lg border border-white/10 bg-navy-800/60 p-6"
          >
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full border border-gold-400/30
                         font-serif text-lg font-semibold text-gold-300"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-lg">{step.title}</h3>
            <p className="mt-2 text-sm text-navy-200">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
