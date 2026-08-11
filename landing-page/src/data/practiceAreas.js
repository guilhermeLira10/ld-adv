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
    /* Descrição aberta pelo termo que o visitante reconhece primeiro
       ("fraude bancária"), não pelo caso mais genérico. */
    description:
      'Fraude bancária, descontos indevidos, negativação indevida e cobranças abusivas — inclusive nome inscrito no SPC ou no Serasa sem motivo.',
    items: [
      { id: 'fraude-bancaria', label: 'Fraude bancária' },
      { id: 'golpe-bancario', label: 'Golpe bancário' },
      { id: 'negativacao-indevida', label: 'Negativação indevida' },
      { id: 'cobrancas-indevidas', label: 'Cobranças indevidas ou abusivas' },
      { id: 'consignado', label: 'Empréstimo consignado' },
    ],
  },
  {
    id: 'compras',
    icon: 'document',
    label: 'Compras e contratos',
    description:
      'Produto ou serviço que não chegou, apresentou defeito ou não foi entregue como combinado.',
    items: [
      { id: 'compras-internet', label: 'Compras pela internet' },
      { id: 'produtos-defeituosos', label: 'Produto defeituoso ou não entregue' },
      { id: 'servico-defeituoso', label: 'Serviço defeituoso ou não prestado' },
      { id: 'descumprimento-contratual', label: 'Descumprimento contratual' },
      { id: 'multa-contratual', label: 'Multa contratual' },
    ],
  },
  /* Plano de saúde e garantia contratual são assuntos distintos — legislação,
     urgência e estratégia diferentes. Ficavam num único card e pareciam mistura. */
  {
    id: 'plano-saude',
    icon: 'heart',
    label: 'Planos de saúde',
    description:
      'Negativa de cobertura, reajuste abusivo, atendimento de urgência e autorização de tratamentos.',
    items: [
      { id: 'negativa-cobertura', label: 'Negativa de cobertura pelo plano' },
      { id: 'reajuste-abusivo', label: 'Reajuste abusivo de mensalidade' },
      { id: 'urgencia-emergencia', label: 'Urgência ou emergência negada' },
      { id: 'tratamento-negado', label: 'Tratamento ou cirurgia negados' },
    ],
  },
  {
    id: 'garantias',
    icon: 'shield',
    label: 'Garantias',
    description:
      'Recusa ou limitação indevida de garantia contratual e de garantia veicular.',
    items: [
      { id: 'garantia-contratual', label: 'Garantia contratual' },
      { id: 'garantia-veicular', label: 'Garantia veicular' },
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
      'Divórcio, partilha de bens, união estável e conflitos entre particulares envolvendo cobranças, danos e indenizações.',
    items: [
      { id: 'divorcio-consensual', label: 'Divórcio consensual' },
      { id: 'divorcio-litigioso', label: 'Divórcio litigioso' },
      { id: 'partilha-bens', label: 'Partilha de bens' },
      {
        id: 'uniao-estavel',
        label: 'União estável (reconhecimento ou dissolução)',
      },
      { id: 'cobrancas', label: 'Cobranças' },
      { id: 'responsabilidade-civil', label: 'Responsabilidade civil' },
      { id: 'indenizacoes', label: 'Indenizações' },
    ],
  },
]

/** Rótulos em lista plana — fonte única do enum de validação. */
export const practiceAreas = practiceGroups.flatMap((group) =>
  group.items.map((item) => item.label),
)
