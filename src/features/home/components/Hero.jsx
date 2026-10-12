import { Container } from '../../../shared/components/Container'
import { Button } from '../../../shared/components/Button'
import { SITE } from '../../../shared/constants/site'
import { whatsappGeneral } from '../../../shared/utils/contactWhatsapp'
import heroImage from '../../../assets/images/hero/barber.jpg'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <Container className="relative z-10 flex min-h-screen flex-col justify-between pt-24 pb-12">
        
        <div className="hidden sm:block" />

        <div className="flex flex-col items-center justify-center text-center gap-6 my-auto">
          <h1 className="font-serif text-5xl font-bold tracking-widest text-icon md:text-6xl">
            FOLLOW ME
          </h1>
          <p className="text-sm font-semibold tracking-[0.3em] text-title max-w-lg">
            {SITE.tagline}
          </p>
          <div className="pt-2">
            <Button href={whatsappGeneral()} target="_blank" rel="noreferrer">
              Reservar
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-surface/40 pt-6 text-1g text-text/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-title"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9D055] text-[14px] font-bold text-icon">
                IG
              </span>
              {SITE.instagram}
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-title"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9D055] text-[14px] font-bold text-icon">
                FB
              </span>
              {SITE.instagram}
            </a>
            <a
              href={whatsappGeneral()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-title"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9D055] text-[14px] font-bold text-icon">
                WA
              </span>
              {SITE.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-subtitle">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D9D055] text-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3.5 w-3.5"
              >
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
              </svg>
            </span>
            <span className="font-semibold text-text/80">Horario</span>
            <span>
              {SITE.schedule.days} · {SITE.schedule.hours}
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}