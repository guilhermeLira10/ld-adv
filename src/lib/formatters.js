/** Aplica a máscara (99) 99999-9999 progressivamente, conforme o usuário digita. */
export function maskPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, '($1')
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, '($1) $2')
  if (digits.length <= 10)
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')

  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
}

/** Monta o link wa.me a partir de um telefone em qualquer formato. */
export function whatsappLink(phone, message = '') {
  const digits = phone.replace(/\D/g, '')
  const withCountry = digits.startsWith('55') ? digits : `55${digits}`
  const query = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${withCountry}${query}`
}
