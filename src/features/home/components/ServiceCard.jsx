import { Button } from '../../../shared/components/Button'
import { whatsappForService } from '../../../shared/utils/contactWhatsapp'

export function ServiceCard({ service }) {
  return (
    <article className="overflow-hidden bg-surface">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <span className="absolute right-4 top-4 bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-background">
          {service.categoryLabel}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-serif text-xl font-bold text-secondary">{service.name}</h3>
        <p className="text-sm leading-relaxed text-subtitle">{service.description}</p>

        <div className="flex items-center justify-between pt-2 text-sm">
          <span className="flex items-center gap-2 text-subtitle">
            <ClockIcon /> {service.duration}
          </span>
          <span className="font-serif text-xl font-bold text-title">${service.price}</span>
        </div>

        <Button
          href={whatsappForService(service.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-2 w-full"
        >
          Reservar
        </Button>
      </div>
    </article>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
