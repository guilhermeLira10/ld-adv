# Especificação — Landing Page

**Cliente:** Nathieli de Sousa Subrinho — OAB/SP 466.797
**Atuação:** Direito do Consumidor e Direito Civil
**Objetivo:** captação de leads — **WhatsApp como canal principal**, formulário como via secundária de registro escrito
**Última atualização:** 2026-07-28

---

## 1. Stack

| Camada | Escolha | Versão |
| --- | --- | --- |
| Build | Vite | 8.1.4 |
| UI | React | 19.2 |
| Estilo | Tailwind CSS (plugin oficial do Vite) | 4.3.3 |
| Formulário | react-hook-form | 7.83 |
| Validação | Zod | 4.4.3 |
| Ponte validação↔form | @hookform/resolvers | 5.5.7 |
| Testes | Vitest | 4.1.10 |
| Lint | ESLint | 10.6 |

Sem TypeScript, sem roteador (página única com âncoras), sem biblioteca de estado.

### Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção em dist/
npm run preview    # serve o build
npm run lint       # ESLint
npm run test       # Vitest (uma execução)
npm run test:watch # Vitest em watch
```

---

## 2. Arquitetura de pastas

```
src/
├── main.jsx                    entrypoint — monta o React e importa o CSS
├── App.jsx                     composição das seções (ordem da página)
│
├── styles/index.css            Tailwind + @theme (design tokens) + camada base
│
├── config/site.js              dados do escritório (nome, OAB, contato)
├── constants/navigation.js     âncoras do menu — fonte única header/footer
│
├── data/
│   ├── practiceAreas.js        áreas agrupadas por ramo + lista plana
│   └── faq.js                  FAQ agrupado por ramo + lista plana
│
├── schemas/leadSchema.js       contrato de validação do lead (Zod)
├── services/leadService.js     I/O — POST do lead ao endpoint
├── hooks/useLeadForm.js        orquestra validação + envio + estado
├── lib/formatters.js           máscara de telefone, link do WhatsApp
│
├── components/
│   ├── ui/Field.jsx            primitivo de campo (label, erro, aria-*)
│   ├── common/LeadForm.jsx     formulário de captação
│   └── layout/
│       ├── Header.jsx          nav fixa + CTA
│       ├── Footer.jsx          contato, navegação, aviso da OAB
│       └── Section.jsx         container padrão das seções
│
├── sections/                   uma seção da página por arquivo
│   ├── HeroSection.jsx
│   ├── PracticeAreasSection.jsx
│   ├── AboutSection.jsx
│   ├── FaqSection.jsx
│   └── ContactSection.jsx
│
├── tests/leadSchema.test.js    18 testes (schema + formatters)
└── assets/                     imagens do site (vazia — aguardando material)
```

### Regras de dependência

O fluxo é unidirecional; nada aponta "para cima":

```
sections/ → components/ → hooks/ → services/ → (rede)
                            ↓
                        schemas/ → data/
```

- **`data/`** não importa nada. É conteúdo puro.
- **`schemas/`** importa apenas `data/` (para derivar o enum de áreas).
- **`services/`** não conhece React. Só faz I/O e lança `Error` com mensagem legível.
- **`hooks/`** é a única camada que conecta formulário, schema e serviço.
- **`components/`** e **`sections/`** não fazem `fetch` nem validação inline.

### Pastas removidas do escopo

`contexts/`, `providers/`, `store/` e `types/` foram criadas no scaffold inicial mas **não têm uso** nesta arquitetura: a página é estática, o único estado é local ao formulário e o projeto é JavaScript puro. Continuam vazias — devem ser removidas ou justificadas por um requisito novo.

---

## 3. Design system

Tokens em `src/styles/index.css`, no bloco `@theme` — o Tailwind v4 gera as utilities automaticamente (`bg-navy-800`, `text-gold-600`, …).

| Token | Valor | Uso |
| --- | --- | --- |
| `navy-50` | `#f4f6f9` | fundo de seções alternadas |
| `navy-100` | `#e4e9f0` | bordas e divisores |
| `navy-400` | `#6a80a0` | texto secundário |
| `navy-700` | `#2a3752` | corpo de texto |
| `navy-800` | `#1b2438` | botões primários |
| `navy-900` | `#111827` | títulos |
| `gold-500` | `#b8894a` | acento, foco |
| `gold-600` | `#9a6f3a` | links e eyebrow |

**Tipografia:** Lora (serif) para títulos, Inter (sans) para corpo — via Google Fonts com `preconnect`.
**Container:** `--container-content: 72rem` → utility `max-w-content`.

A paleta roxa do template Vite (`#aa3bff`) foi substituída.

---

## 4. Estrutura da página

| # | Seção | Âncora | Conteúdo |
| --- | --- | --- | --- |
| — | Header | — | nome + OAB, nav, CTA "Falar com a advogada" (sticky) |
| 1 | Hero | `#top` | headline, subtexto, 2 CTAs |
| 2 | Áreas de atuação | `#atuacao` | 2 cards (Consumidor / Civil) com as áreas em chips |
| 3 | Sobre | `#sobre` | bio + ficha (inscrição, atendimento, áreas) |
| 4 | Faixa de CTA | — | "Precisa de orientação jurídica?" + 2 CTAs (sem âncora no menu) |
| 5 | Dúvidas frequentes | `#faq` | acordeão `<details>` agrupado por ramo |
| 6 | Contato | `#contato` | formulário de lead + WhatsApp/e-mail + aviso LGPD |
| — | Footer | — | contato, navegação, aviso do Provimento 205/2021 |

### Áreas de atuação

**Direito do Consumidor (14):** empréstimo consignado, golpe bancário, fraude bancária, negativação indevida, cobranças indevidas, descumprimento contratual, multa contratual, garantia veicular, compras pela internet, problemas em aeroportos, produtos defeituosos, serviço defeituoso, plano de saúde, acidente de veículos.

**Direito Civil (1):** divórcio.

### FAQ

- **Consumidor (5):** quando procurar advogado; resolver sem processo; negativação indevida; documentos necessários; prazos.
- **Civil (2):** consensual vs. litigioso; tempo do divórcio.
- **Atendimento (2):** como funciona a primeira consulta; como são definidos os honorários.

A pergunta sobre honorários vinha do mockup e responde sem citar valores — só o critério (complexidade + Tabela da OAB/SP), o que o Provimento 205/2021 permite.

Respostas redigidas sem promessa de resultado. **Pendente de revisão pela advogada.**

---

## 5. Captação de lead

### Hierarquia de canais

A expectativa é que a maioria dos contatos venha pelo WhatsApp. A interface reflete isso:

| Ponto | Canal | Componente |
| --- | --- | --- |
| Header (sticky) | WhatsApp | `WhatsappButton variant="compact"` |
| Hero — CTA primário | WhatsApp | `WhatsappButton variant="primary"` |
| Hero — CTA secundário | formulário (`#contato`) | link |
| Botão flutuante (canto inferior) | WhatsApp | `FloatingWhatsapp` |
| Seção de contato | WhatsApp à esquerda, formulário à direita | ambos |
| Erro de envio do formulário | fallback para WhatsApp | `variant="ghost"` |
| Footer | WhatsApp, telefone, e-mail | ambos |

Todos os links usam `whatsappLink()` com mensagem pré-preenchida (`whatsappGreeting` em `config/site.js`), então a conversa já chega com contexto.


### Campos e validação (`schemas/leadSchema.js`)

| Campo | Regra | Erro |
| --- | --- | --- |
| `name` | 3–120 caracteres | "Informe seu nome completo." |
| `email` | formato de e-mail | "E-mail inválido." |
| `phone` | `(99) 99999-9999` ou `(99) 9999-9999` | "Telefone inválido. Use (11) 91234-5678." |
| `area` | enum derivado de `practiceAreas` | "Selecione a área do seu caso." |
| `message` | 20–2000 caracteres | "Descreva seu caso em pelo menos 20 caracteres." |
| `consent` | obrigatoriamente `true` | "É necessário aceitar a política de privacidade." |

O enum de `area` é **derivado** de `data/practiceAreas.js` — adicionar uma área nova ao arquivo de dados já a habilita no formulário e no `<select>`, sem tocar no schema.

### Fluxo

```
LeadForm  →  useLeadForm  →  zodResolver(leadSchema)  →  submitLead  →  POST endpoint
   ↑                              (validação onBlur)          ↓
   └──────── status: idle | success | error  ←────── Error(mensagem legível)
```

- Validação em `onBlur`; erros por campo com `role="alert"` e `aria-describedby`.
- Máscara de telefone aplicada durante a digitação (`lib/formatters.js`).
- Em `success`, o formulário é substituído por confirmação e resetado.
- Em `error`, mostra a mensagem e oferece o WhatsApp como alternativa.

### Configuração do envio

O volume esperado é baixo (o WhatsApp absorve a maior parte), então um plano gratuito atende. O projeto usa **Web3Forms** por padrão, sem backend próprio:

| Serviço | Limite grátis | Variáveis |
| --- | --- | --- |
| **Web3Forms** | 250 envios/mês | `VITE_LEAD_ENDPOINT=https://api.web3forms.com/submit` + `VITE_LEAD_ACCESS_KEY` |

`leadService.js` envia o payload direto para Web3Forms e trata `{ success: false }` como erro mesmo com HTTP 200. Se a access key não estiver configurada, o formulário mostra erro claro de configuração em vez de falhar silenciosamente.

Payload enviado:

```json
{
  "name": "...", "email": "...", "phone": "(11) 91234-5678",
  "area": "Negativação indevida", "message": "...",
  "consent": true, "submittedAt": "2026-07-28T20:00:00.000Z"
}
```

### LGPD

- Checkbox de consentimento explícito, obrigatório para submissão.
- Bloco de privacidade em `#privacidade` com finalidade, não-compartilhamento e direito de exclusão.
- Aviso para não enviar documentos ou dados sigilosos pelo formulário.

---

## 6. Conformidade OAB

Provimento 205/2021 e Código de Ética:

- Sem promessa ou garantia de resultado.
- Sem menção a valores de honorários ou de indenizações.
- Sem linguagem de captação agressiva ("mercantilização").
- OAB/SP 466.797 visível no header e no footer.
- Aviso no footer sobre o caráter informativo do site.
- Nota no formulário: o envio não cria relação advogado-cliente.

---

## 7. Acessibilidade e SEO

**Acessibilidade:** HTML semântico (`header`/`main`/`section`/`footer`), labels associados por `id`, `aria-invalid` e `aria-describedby` nos campos, `role="alert"` nos erros, foco visível com `outline` dourado, acordeão nativo `<details>` (funciona sem JS).

**SEO:** `lang="pt-BR"`, title descritivo, meta description, Open Graph e Twitter Card, `robots: index, follow`.

---

## 8. Estado atual da verificação

| Verificação | Resultado |
| --- | --- |
| `npm run build` | ✅ 510 ms — CSS 27,9 kB (5,8 kB gzip), JS 311,5 kB (96,8 kB gzip) |
| `npm run lint` | ✅ 0 problemas |
| `npm run test` | ✅ 18/18 |
| `npm audit` | ✅ 0 vulnerabilidades |

---

## 9. Pendências

### Bloqueiam a publicação

1. **Número do WhatsApp** — `config/site.js` tem `(11) 98922-0051`. É o item mais crítico: alimenta o header, o hero, o botão flutuante, a seção de contato e o footer.
2. **E-mail e cidade** — também placeholders em `config/site.js`.
3. **Access Key do Web3Forms** — criar em web3forms.com e preencher o `.env`.
4. **Domínio** — URLs absolutas de Open Graph e `site.url`.
5. **Revisão jurídica** do FAQ, da bio e dos textos do Hero pela advogada.

### Ajustes de conteúdo

5. **Favicon** — `public/favicon.svg` ainda é o do Vite.
6. **Imagem de perfil** e imagem Open Graph — `src/assets/` está vazia.
7. **Bio da advogada** — texto atual é genérico (marcado com `TODO`).
8. **Direito Civil com 1 item** — o card fica desequilibrado ao lado dos 14 de Consumidor. O cliente enviará a lista completa; basta acrescentar os itens em `data/practiceAreas.js` (o `<select>` e o enum de validação se atualizam sozinhos).

### Técnicas (não bloqueiam)

9. **Git não inicializado** — não existe `.git` no projeto.
10. **Pastas vazias sem uso** — `contexts/`, `providers/`, `store/`, `types/`.
11. **Nível de aninhamento** — `ld-adv/landing-page/` só faz sentido se houver outros pacotes.
12. **JSON-LD** — `faqs` e `practiceAreas` já são exportados em lista plana para alimentar `FAQPage` e `LegalService` structured data quando desejado.
