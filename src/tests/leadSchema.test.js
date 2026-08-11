import { describe, it, expect } from 'vitest'
import { leadSchema } from '../schemas/leadSchema'
import { practiceAreas } from '../data/practiceAreas'
import { maskPhone, whatsappLink } from '../lib/formatters'

const valid = {
  name: 'Maria de Souza',
  email: 'maria@exemplo.com.br',
  phone: '(11) 91234-5678',
  area: 'Negativação indevida',
  message: 'Meu nome foi negativado por uma dívida que não reconheço.',
  consent: true,
}

describe('leadSchema', () => {
  it('aceita um lead completo', () => {
    expect(leadSchema.safeParse(valid).success).toBe(true)
  })

  it('aceita telefone fixo de 8 dígitos', () => {
    const result = leadSchema.safeParse({ ...valid, phone: '(11) 1234-5678' })
    expect(result.success).toBe(true)
  })

  it.each([
    ['name', 'Ma'],
    ['email', 'maria@'],
    ['phone', '11912345678'],
    ['area', 'Área inexistente'],
    ['message', 'curto'],
    ['consent', false],
  ])('rejeita %s inválido', (field, value) => {
    const result = leadSchema.safeParse({ ...valid, [field]: value })
    expect(result.success).toBe(false)
    expect(result.error.issues.some((i) => i.path[0] === field)).toBe(true)
  })

  it('cobre todas as áreas declaradas no enum', () => {
    for (const area of practiceAreas) {
      expect(leadSchema.safeParse({ ...valid, area }).success).toBe(true)
    }
  })
})

describe('maskPhone', () => {
  it.each([
    ['1', '(1'],
    ['11', '(11'],
    ['1191', '(11) 91'],
    ['1191234', '(11) 9123-4'],
    ['11912345678', '(11) 91234-5678'],
    ['11912345678999', '(11) 91234-5678'],
  ])('formata %s como %s', (input, expected) => {
    expect(maskPhone(input)).toBe(expected)
  })
})

describe('whatsappLink', () => {
  it('prefixa o código do país', () => {
    expect(whatsappLink('(11) 91234-5678')).toBe('https://wa.me/5511912345678')
  })

  it('não duplica o 55 já presente', () => {
    expect(whatsappLink('5511912345678')).toBe('https://wa.me/5511912345678')
  })

  it('codifica a mensagem', () => {
    expect(whatsappLink('11912345678', 'Olá!')).toContain('?text=Ol%C3%A1!')
  })
})
