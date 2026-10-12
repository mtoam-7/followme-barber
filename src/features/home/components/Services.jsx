import { useMemo, useState } from 'react'
import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { FilterPills } from '../../../shared/components/FilterPills'
import { Carousel } from '../../../shared/components/Carousel'
import { SERVICE_CATEGORIES, SERVICES } from '../data/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  const [category, setCategory] = useState('todos')

  const filtered = useMemo(() => {
    if (category === 'todos') return SERVICES
    return SERVICES.filter((service) => service.category === category)
  }, [category])

  return (
    <section id="servicios" className="bg-background py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Servicios" title="NUESTROS SERVICIOS" />

        <FilterPills options={SERVICE_CATEGORIES} active={category} onChange={setCategory} />

        <Carousel
          className="w-full max-w-md"
          items={filtered}
          renderItem={(service) => <ServiceCard service={service} />}
        />
      </Container>
    </section>
  )
}
