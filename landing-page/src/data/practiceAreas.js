/**
 * Áreas de atuação agrupadas por tipo de problema — não por ramo do direito.
 * O visitante não chega ao site pensando "isso é consumidor ou civil?"; ele
 * pensa "o banco me cobrou errado". Os grupos seguem esse vocabulário.
 *
 * `id` é estável (usado em âncoras/analytics); `label` é o texto exibido.
 * `icon` referencia uma chave de `components/ui/Icon`.
 * A lista plana `practiceAreas` alimenta o enum do formulário de lead.
 */
export const practiceGroups = [
  {
    id: 'bancario',
    icon: 'bank',
    label: 'Bancos e crédito',
    description:
      'Cobranças que você não reconhece, descontos indevidos, fraudes na sua conta e nome inscrito no SPC ou no Serasa sem motivo.',
    items: [
      { id: 'consignado', label: 'Empréstimo consignado' },
      { id: 'golpe-bancario', label: 'Golpe bancário' },
      { id: 'fraude-bancaria', label: 'Fraude bancária' },
      { id: 'negativacao-indevida', label: 'Negativação indevida' },
      { id: 'cobrancas-indevidas', label: 'Cobranças indevidas ou abusivas' },
    ],
  },
  {
    id: 'compras',
    icon: 'document',
    label: 'Compras e contratos',
    description:
      'Produto ou serviço que não chegou, veio com defeito ou não foi entregue como combinado.',
    items: [
      { id: 'compras-internet', label: 'Compras pela internet' },
      { id: 'produtos-defeituosos', label: 'Produto defeituoso ou não entregue' },
      { id: 'servico-defeituoso', label: 'Serviço defeituoso ou não prestado' },
      { id: 'descumprimento-contratual', label: 'Descumprimento contratual' },
      { id: 'multa-contratual', label: 'Multa contratual' },
    ],
  },
  {
    id: 'saude',
    icon: 'shield',
    label: 'Saúde e garantias',
    description:
      'Negativa de cobertura pelo plano e recusa de garantia contratada.',
    items: [
      { id: 'plano-de-saude', label: 'Plano de saúde' },
      { id: 'garantia-veicular', label: 'Problemas com garantia veicular' },
    ],
  },
  {
    id: 'transporte',
    icon: 'plane',
    label: 'Transporte e viagens',
    description:
      'Voos atrasados ou cancelados, bagagem extraviada e acidentes de trânsito.',
    items: [
      {
        id: 'aeroportos',
        label: 'Problemas em aeroportos (atraso, cancelamento, extravio)',
      },
      { id: 'acidente-veiculos', label: 'Acidente de veículos' },
    ],
  },
  {
    id: 'civil',
    icon: 'scale',
    label: 'Família e civil',
    description:
      'Conflitos entre particulares e questões de direito de família.',
    items: [{ id: 'divorcio', label: 'Divórcio' }],
  },
]

/** Rótulos em lista plana — fonte única do enum de validação. */
export const practiceAreas = practiceGroups.flatMap((group) =>
  group.items.map((item) => item.label),
)
