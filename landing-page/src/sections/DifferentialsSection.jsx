import { Section } from '../components/layout/Section'
import { Icon } from '../components/ui/Icon'

/**
 * Diferenciais do atendimento — responde ao "por que este escritório?" que a
 * página não respondia. Todos os itens descrevem a forma de trabalho, não
 * resultado: nada aqui promete êxito (Provimento 205/2021 da OAB).
 *
 * TODO: confirmar cada item com a advogada antes de publicar.
 */
const differentials = [
  {
    icon: 'phone',
    title: 'Atendimento direto com a advogada',
    description:
      'Você fala com quem conduz o seu caso, sem intermediários e sem passar de setor em setor.',
  },
  {
    icon: 'document',
    title: 'Explicação clara de cada etapa',
    description:
      'Cada movimentação é explicada em linguagem acessível, com o que já aconteceu e o que vem a seguir.',
  },
  {
    icon: 'scale',
    title: 'Atuação estratégica',
    description:
      'Avaliação honesta entre a solução extrajudicial, quando ela resolve mais rápido, e a ação judicial, quando é necessária.',
  },
  {
    icon: 'pin',
    title: 'Presencial e on-line',
    description:
      'Atendimento presencial em São Paulo ou integralmente a distância, por WhatsApp, e-mail e videochamada.',
  },
  {
    icon: 'mail',
    title: 'Comunicação transparente',
    description:
      'Prazos, custos e riscos informados por escrito desde a primeira análise, durante todo o acompanhamento.',
  },
]

export function DifferentialsSection() {
  return (
    <Section
      id="diferenciais"
      eyebrow="Diferenciais"
      title="Por que escolher nosso escritório"
      description="Nenhum resultado pode ser prometido em processo judicial. O que se pode garantir é a forma de trabalho."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item) => (
          <li
            key={item.title}
            className="rounded-lg border border-white/10 bg-navy-800/60 p-6"
          >
            <span className="flex size-10 items-center justify-center rounded-md bg-gold-400/10 text-gold-300">
              <Icon name={item.icon} className="size-5" />
            </span>
            <h3 className="mt-4 text-lg">{item.title}</h3>
            <p className="mt-2 text-sm text-navy-200">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
