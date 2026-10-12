import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { TEAM } from '../data/team'
import { TeamCard } from './TeamCard'

export function Team() {
  return (
    <section id="equipo" className="bg-background py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Equipo" title="LOS ARTESANOS" />

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  )
}
