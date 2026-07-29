const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_LEAD_ACCESS_KEY

/**
 * Envia o lead por e-mail através do serviço configurado em .env.
 * Compatível com Web3Forms / Formspree / endpoint próprio: quando
 * VITE_LEAD_ACCESS_KEY existe, ela vai no corpo (formato Web3Forms).
 *
 * Lança Error com mensagem apresentável — a section trata o catch e
 * oferece o WhatsApp como alternativa.
 */
export async function submitLead(lead) {
  if (!ENDPOINT) {
    throw new Error(
      'Formulário não configurado: defina VITE_LEAD_ENDPOINT no arquivo .env.',
    )
  }

  const payload = {
    ...lead,
    submittedAt: new Date().toISOString(),
    subject: `Novo contato pelo site — ${lead.area}`,
    ...(ACCESS_KEY && { access_key: ACCESS_KEY }),
  }

  let response
  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Falha de conexão. Verifique sua internet e tente novamente.')
  }

  const data = await response.json().catch(() => ({}))

  // Web3Forms responde 200 com { success: false } em caso de erro de validação.
  if (!response.ok || data.success === false) {
    throw new Error(
      'Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco pelo WhatsApp.',
    )
  }

  return data
}
