import { Section } from '../components/layout/Section'
import { LeadForm } from '../components/common/LeadForm'
import { WhatsappButton } from '../components/common/WhatsappButton'
import { site } from '../config/site'

export function ContactSection() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Conte o que aconteceu"
      description="O caminho mais rápido é o WhatsApp. Se preferir registrar o caso por escrito, use o formulário."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <aside className="flex flex-col gap-6 lg:col-span-2">
          <div className="rounded-lg border border-white/10 bg-navy-800/60 p-6">
            <h3 className="text-lg">Atendimento direto</h3>
            <p className="mt-2 text-sm text-navy-200">
              Mande uma mensagem com um resumo do que aconteceu. O retorno é feito em
              horário comercial.
            </p>

            <WhatsappButton className="mt-5 w-full justify-center">
              Falar no WhatsApp
            </WhatsappButton>

            <ul className="mt-5 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, '')}`}
                  className="hover:text-gold-300"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                  {site.email}
                </a>
              </li>
              <li className="text-navy-400">{site.city}</li>
            </ul>
          </div>

          <div id="privacidade" className="rounded-lg border border-white/10 p-6">
            <h3 className="text-lg">Privacidade dos seus dados</h3>
            <p className="mt-3 text-sm text-navy-200">
              Os dados enviados são usados exclusivamente para responder ao seu
              contato e analisar o caso, conforme a LGPD (Lei 13.709/2018). Não são
              compartilhados com terceiros. Você pode solicitar a exclusão a qualquer
              momento pelo e-mail acima.
            </p>
            <p className="mt-3 text-sm text-navy-400">
              Evite enviar documentos ou dados sigilosos por este formulário.
            </p>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-lg">Ou envie pelo formulário</h3>
          <LeadForm />
        </div>
      </div>
    </Section>
  )
}
