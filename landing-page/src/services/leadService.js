const DEFAULT_ENDPOINT = 'https://api.web3forms.com/submit'
const ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || DEFAULT_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_LEAD_ACCESS_KEY

/**
 * Envia o lead por e-mail usando Web3Forms por padrão, sem backend.
 * O endpoint pode ser sobrescrito via .env, mas o fluxo principal é
 * VITE_LEAD_ENDPOINT=https://api.web3forms.com/submit com uma access key.
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

  if (ENDPOINT === DEFAULT_ENDPOINT && !ACCESS_KEY) {
    throw new Error(
      'Serviço não configurado: defina VITE_LEAD_ACCESS_KEY no arquivo .env para usar o envio gratuito via Web3Forms.',
    )
  }

  const payload = new FormData()

  Object.entries({
    ...lead,
    submittedAt: new Date().toISOString(),
    subject: `Novo contato pelo site — ${lead.area}`,
  }).forEach(([key, value]) => {
    payload.append(key, String(value))
  })

  payload.append('access_key', ACCESS_KEY)

  let response
  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      body: payload,
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
