/**
 * FAQ agrupado por ramo. Respostas redigidas em linguagem acessível e sem
 * promessa de resultado (Provimento 205/2021 da OAB).
 * REVISAR com a advogada responsável antes de publicar.
 */
export const faqGroups = [
  {
    id: 'consumidor',
    label: 'Direito do Consumidor',
    items: [
      {
        id: 'quando-procurar',
        question: 'Quando devo procurar um advogado de consumidor?',
        answer:
          'Sempre que a empresa não resolver o problema pelos canais próprios — SAC, ouvidoria ou plataforma de reclamação. Cobranças que você não reconhece, produto com defeito não trocado, contrato descumprido ou nome negativado sem motivo são situações em que a orientação jurídica ajuda a definir o próximo passo.',
      },
      {
        id: 'sem-processo',
        question: 'É possível resolver sem processo?',
        answer:
          'Em muitos casos, sim. Uma notificação extrajudicial ou uma tentativa de acordo direto com a empresa costuma resolver situações mais simples, com menos tempo e custo. Quando não há acordo, avaliamos o ingresso da ação judicial.',
      },
      {
        id: 'negativacao',
        question: 'Meu nome foi negativado por uma dívida que não é minha. O que faço?',
        answer:
          'Reúna o extrato do SPC/Serasa e qualquer contato que tenha feito com a empresa. A negativação indevida pode ser retirada por decisão judicial e, dependendo do caso, gerar direito a indenização por danos morais.',
      },
      {
        id: 'documentos',
        question: 'Quais documentos preciso separar?',
        answer:
          'Documento de identidade, comprovante de residência e tudo que registre o problema: contrato, boletos, extratos, e-mails, protocolos de atendimento e prints de conversas. Quanto mais completo o histórico, mais preciso é o parecer.',
      },
      {
        id: 'prazo',
        question: 'Existe prazo para reclamar?',
        answer:
          'Sim, e ele varia conforme o caso. O Código de Defesa do Consumidor prevê prazos curtos para reclamar de defeitos, e há prazos distintos de prescrição para pedidos de reparação. Por isso vale procurar orientação o quanto antes.',
      },
      {
        id: 'dano-moral',
        question: 'Posso pedir indenização por dano moral?',
        answer:
          'Depende do caso. O dano moral pressupõe uma lesão concreta a direito da personalidade — como uma negativação indevida, a exposição do consumidor a constrangimento ou a recusa injustificada de um tratamento de saúde. Meros dissabores contratuais, em regra, não são indenizáveis. O cabimento do pedido e o valor eventualmente devido são definidos pelo juiz a partir das provas, e não é possível garantir resultado.',
      },
      {
        id: 'tempo-processo',
        question: 'Quanto tempo demora um processo?',
        answer:
          'Varia conforme a complexidade do caso, a comarca e o comportamento da parte contrária. Uma tentativa de acordo ou notificação extrajudicial pode se resolver em semanas; uma ação judicial acompanha o ritmo do Judiciário e pode levar meses ou anos, sobretudo se houver recurso. Na análise inicial informamos o cenário realista do seu caso, sem estimativas artificiais.',
      },
      {
        id: 'vale-a-pena',
        question: 'Vale a pena entrar na Justiça?',
        answer:
          'É uma decisão sua, tomada com informação. Avaliamos as provas disponíveis, os custos, os prazos e os riscos — inclusive o de um resultado desfavorável — e comparamos com as alternativas extrajudiciais. Em alguns casos o acordo é mais vantajoso; em outros, a ação judicial é o único caminho. A recomendação é apresentada de forma clara antes de qualquer contratação.',
      },
    ],
  },
  {
    id: 'civil',
    label: 'Direito Civil',
    items: [
      {
        id: 'divorcio-consensual',
        question: 'Qual a diferença entre divórcio consensual e litigioso?',
        answer:
          'No consensual, as partes concordam quanto à partilha, guarda e alimentos — o processo é mais rápido e, sem filhos menores ou incapazes, pode ser feito em cartório. No litigioso, há pontos em disputa e a decisão fica com o juiz.',
      },
      {
        id: 'divorcio-tempo',
        question: 'Quanto tempo leva um divórcio?',
        answer:
          'Depende do grau de acordo entre as partes e da comarca. O consensual em cartório pode se resolver em semanas; o litigioso acompanha o ritmo do processo judicial. Na primeira análise explicamos o cenário realista do seu caso.',
      },
      {
        id: 'divorcio-custo',
        question: 'Quanto custa um divórcio?',
        answer:
          'O custo tem duas partes. A primeira são as despesas oficiais: emolumentos do cartório, no divórcio consensual, ou custas processuais, no judicial — quem não tem condições de pagar pode requerer a gratuidade da Justiça. A segunda são os honorários advocatícios, definidos conforme a complexidade do caso e a Tabela de Honorários da OAB/SP, sempre informados por escrito antes de qualquer contratação.',
      },
      {
        id: 'divorcio-forum',
        question: 'Preciso comparecer ao fórum?',
        answer:
          'Na maioria dos casos, não. No divórcio consensual sem filhos menores ou incapazes, o ato é feito em cartório e a advogada pode conduzir as tratativas. No judicial, o comparecimento normalmente se restringe às audiências, que hoje costumam ser realizadas por videoconferência.',
      },
      {
        id: 'divorcio-online',
        question: 'Posso fazer divórcio on-line?',
        answer:
          'Sim. O divórcio consensual pode ser formalizado em cartório por meio eletrônico, com assinatura digital, e as ações judiciais tramitam em processo eletrônico. O atendimento também pode ser feito integralmente a distância, por WhatsApp, e-mail e videochamada, mesmo que você não esteja em São Paulo.',
      },
    ],
  },
  {
    id: 'atendimento',
    label: 'Atendimento',
    items: [
      {
        id: 'consulta-inicial',
        question: 'Como funciona a primeira consulta?',
        answer:
          'É uma conversa para entender o seu caso, verificar a documentação e apresentar os caminhos possíveis, com os prazos e custos envolvidos. Você sai da consulta sabendo quais são as opções antes de decidir qualquer coisa.',
      },
      {
        id: 'honorarios',
        question: 'Como são definidos os honorários?',
        answer:
          'Variam conforme a complexidade do caso e o tipo de atuação necessária, sempre observando a Tabela de Honorários da OAB/SP. Todas as condições são informadas de forma clara e por escrito antes do início de qualquer trabalho — nenhum valor é cobrado sem que você saiba exatamente o que está contratando.',
      },
    ],
  },
]

/** Lista plana — usada no JSON-LD de FAQPage. */
export const faqs = faqGroups.flatMap((group) => group.items)
