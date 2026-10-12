import { Container } from './Container'
import { SITE } from '../constants/site'
import { whatsappGeneral } from '../utils/contactWhatsapp'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface bg-background py-10">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-1 text-sm text-subtitle">
          <a href={`mailto:${SITE.email}`} className="hover:text-title">
            {SITE.email}
          </a>
          <a href={whatsappGeneral()} target="_blank" rel="noreferrer" className="hover:text-title">
            {SITE.phoneDisplay.replace(/\s/g, '')}
          </a>
        </div>

        <h2 className="font-serif text-2xl font-bold tracking-widest text-title">
          {SITE.name}
        </h2>

        <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-subtitle">
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-title">
            Instagram
          </a>
          <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-title">
            Facebook
          </a>
          <a href={whatsappGeneral()} target="_blank" rel="noreferrer" className="hover:text-title">
            WhatsApp
          </a>
        </div>

        <p className="text-xs tracking-wide text-subtitle/70">
          {year} {SITE.name} BARBERSHOP. {SITE.tagline}.
        </p>
      </Container>
    </footer>
  )
}
