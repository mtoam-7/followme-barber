import { useMemo, useState } from 'react'
import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { FilterPills } from '../../../shared/components/FilterPills'
import { Carousel } from '../../../shared/components/Carousel'
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery'

export function Gallery() {
  const [category, setCategory] = useState('todo')

  const filtered = useMemo(() => {
    if (category === 'todo') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.category === category)
  }, [category])

  return (
    <section id="galeria" className="bg-background py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Galería" title="NUESTRO TRABAJO" />

        <FilterPills options={GALLERY_CATEGORIES} active={category} onChange={setCategory} />

        <Carousel
          className="w-full" items={filtered} renderItem={(item) => (
            <div 
              className="h-96 w-full bg-cover bg-center md:h-[46rem]" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={item.alt}
            />
          )}
        />
      </Container>
    </section>
  )
}