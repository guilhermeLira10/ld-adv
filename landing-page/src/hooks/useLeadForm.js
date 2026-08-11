import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, leadDefaultValues } from '../schemas/leadSchema'
import { submitLead } from '../services/leadService'

const GENERIC_SUBMIT_ERROR =
  'Não foi possível enviar sua mensagem agora. Tente novamente ou fale conosco pelo WhatsApp.'

/**
 * Encapsula validação + envio do lead.
 * status: 'idle' | 'success' | 'error' — `isSubmitting` vem do react-hook-form.
 */
export function useLeadForm() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: leadDefaultValues,
    mode: 'onBlur',
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus('idle')
    setErrorMessage('')

    try {
      await submitLead(values)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(GENERIC_SUBMIT_ERROR)
    }
  })

  return { ...form, onSubmit, status, errorMessage }
}
