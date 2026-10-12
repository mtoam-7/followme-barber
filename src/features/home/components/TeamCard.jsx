import { Button } from '../../../shared/components/Button'
import { whatsappForBarber } from '../../../shared/utils/contactWhatsapp'

export function TeamCard({ member }) {
  return (
    <article className="flex flex-col overflow-hidden bg-surface">
      <div
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${member.image})` }}
      />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-serif text-lg font-bold uppercase tracking-wide text-secondary">
            {member.name}
          </h3>
          <p className="text-sm text-subtitle">{member.role}</p>
        </div>

        <p className="flex items-center gap-2 text-sm text-title">
          <StarIcon /> {member.experienceYears} años de experiencia
        </p>

        <p className="text-sm text-subtitle">{member.bio}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {member.tags.map((tag) => (
            <span
              key={tag}
              className="bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-subtitle"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          href={whatsappForBarber(member.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-auto w-full"
        >
          Ver agenda
        </Button>
      </div>
    </article>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z" />
    </svg>
  )
}
