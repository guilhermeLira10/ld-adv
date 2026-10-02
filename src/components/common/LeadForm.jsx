import { useLeadForm } from '../../hooks/useLeadForm'
import { practiceGroups } from '../../data/practiceAreas'
import { maskPhone } from '../../lib/formatters'
import { Field, controlClass } from '../ui/Field'
import { buttonClass } from '../ui/Button'
import { WhatsappButton } from './WhatsappButton'

export function LeadForm() {
  const {
    register,
    setValue,
    formState: { errors, isSubmitting },
    onSubmit,
    status,
    errorMessage,
  } = useLeadForm()

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-lg border border-gold-400/40 bg-navy-800/60 p-6 text-center"
      >
        <h3 className="text-xl">Recebemos seu contato</h3>
        <p className="mt-2 text-sm text-navy-200">
          Um advogado responsável analisará seu caso e retornará em até 1 dia útil.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <Field label="Nome completo" name="name" error={errors.name?.message}>
        {(a11y) => (
          <input
            {...a11y}
            {...register('name')}
            type="text"
            autoComplete="name"
            className={controlClass}
          />
        )}
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="E-mail" name="email" error={errors.email?.message}>
          {(a11y) => (
            <input
              {...a11y}
              {...register('email')}
              type="email"
              autoComplete="email"
              className={controlClass}
            />
          )}
        </Field>

        <Field
          label="Telefone / WhatsApp"
          name="phone"
          error={errors.phone?.message}
        >
          {(a11y) => (
            <input
              {...a11y}
              {...register('phone')}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="(11) 91234-5678"
              className={controlClass}
              onChange={(e) =>
                setValue('phone', maskPhone(e.target.value), {
                  shouldValidate: false,
                })
              }
            />
          )}
        </Field>
      </div>

      <Field label="Assunto" name="area" error={errors.area?.message}>
        {(a11y) => (
          <select {...a11y} {...register('area')} className={controlClass}>
            <option value="">Selecione…</option>
            {practiceGroups.map((group) => (
              <optgroup key={group.id} label={group.label}>
                {group.items.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        )}
      </Field>

      <Field
        label="Descreva seu caso"
        name="message"
        error={errors.message?.message}
        hint="Não envie documentos ou dados sigilosos por este formulário."
      >
        {(a11y) => (
          <textarea
            {...a11y}
            {...register('message')}
            rows={5}
            className={`${controlClass} resize-y`}
          />
        )}
      </Field>

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-2 text-sm">
          <input
            {...register('consent')}
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-gold-500"
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>
            Autorizo o contato e o tratamento dos meus dados conforme a{' '}
            <a href="#privacidade" className="text-gold-300 underline">
              política de privacidade
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="text-xs text-red-300">
            {errors.consent.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-md border border-red-400/40 bg-red-950/40 p-4">
          <p className="text-sm text-red-200">{errorMessage}</p>
          <WhatsappButton variant="ghost" className="mt-2 text-sm">
            Falar no WhatsApp em vez disso
          </WhatsappButton>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClass({
          className: 'mt-2 w-full disabled:opacity-60',
        })}
      >
        {isSubmitting ? 'Enviando…' : 'Solicitar análise do caso'}
      </button>

      <p className="text-xs text-navy-300">
        O envio deste formulário não cria relação advogado-cliente.
      </p>
    </form>
  )
}
