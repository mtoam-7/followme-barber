import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { SITE } from '../../../shared/constants/site'
import { whatsappGeneral } from '../../../shared/utils/contactWhatsapp'

export function Contact() {
  return (
    <section id="contacto" className="bg-background py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Contacto" title="ENCUÉNTRANOS" />

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-title">
            Dónde estamos
          </h3>
        </div>

        <div className="h-80 w-full overflow-hidden md:h-96">
          <iframe
            title="Ubicación de Follow-Me"
            src={SITE.mapEmbedUrl}
            className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-sm text-text/80 sm:flex-row sm:gap-10">
          <a href={whatsappGeneral()} target="_blank" rel="noreferrer" className="hover:text-title">
            {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-title">
            {SITE.email}
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-icon hover:text-title">
            <InstagramIcon />
          </a>
          <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="text-icon hover:text-title">
            <FacebookIcon />
          </a>
          <a href={whatsappGeneral()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-icon hover:text-title">
            <WhatsappIcon />
          </a>
        </div>
      </Container>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.49-1.46H16.5V4.32C16.2 4.28 15.2 4.2 14 4.2c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5z" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.86.5 3.6 1.4 5.1L2 22l5.06-1.36A9.9 9.9 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.1c-1.6 0-3.1-.44-4.38-1.2l-.31-.18-3.01.8.8-2.94-.2-.32a8.1 8.1 0 1 1 7.1 3.84zm4.44-6.08c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  )
}
