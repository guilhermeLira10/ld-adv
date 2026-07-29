import { z } from 'zod'
import { practiceAreas } from '../data/practiceAreas'

// (11) 91234-5678 ou (11) 1234-5678
const PHONE_RE = /^\(\d{2}\)\s\d{4,5}-\d{4}$/

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Informe seu nome completo.')
    .max(120, 'Nome muito longo.'),

  email: z.string().trim().pipe(z.email('E-mail inválido.')),

  phone: z
    .string()
    .trim()
    .regex(PHONE_RE, 'Telefone inválido. Use (11) 91234-5678.'),

  area: z.enum(practiceAreas, 'Selecione a área do seu caso.'),

  message: z
    .string()
    .trim()
    .min(20, 'Descreva seu caso em pelo menos 20 caracteres.')
    .max(2000, 'Descrição muito longa (máx. 2000 caracteres).'),

  // LGPD: consentimento explícito é obrigatório para captação de lead.
  consent: z.literal(true, 'É necessário aceitar a política de privacidade.'),
})

export const leadDefaultValues = {
  name: '',
  email: '',
  phone: '',
  area: '',
  message: '',
  consent: false,
}
