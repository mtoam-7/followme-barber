import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'

const HISTORY = [
  {
    year: '2024',
    title: 'I N A G U R A C I Ó N',
    description:
      'Apertura de nuestra primera sucursal. Gracias a la excelente respuesta de nuestro clientes, iniciamos con el compromiso de brindar servicios de alta calidad y la visión de expandirnos para atender a una comunidad cada vez más grande.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-background py-24">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Nosotros" title="QUIENES SOMOS" />

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-bold uppercase tracking-widest text-title">
              Misión
            </h3>
            <p className="text-sm leading-relaxed text-subtitle">
              Ofrecer una experiencia de barbería honesta y de calidad, cuidando cada
              detalle del servicio para que cada cliente salga con la confianza de verse
              bien.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg font-bold uppercase tracking-widest text-title">
              Visión
            </h3>
            <p className="text-sm leading-relaxed text-subtitle">
              Ser la barbería de referencia en la ciudad, reconocida por la dedicación de
              su equipo y la calidez de su trato.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h3 className="font-serif text-lg font-bold uppercase tracking-widest text-title">
            Nuestro Compromiso
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-subtitle">
            Trabajamos con productos de calidad y técnicas actualizadas, cuidando la
            higiene y la comodidad de cada cliente en cada visita.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-2">
            <span className="font-serif text-lg italic text-title">Historia</span>
            <h3 className="font-serif text-2xl font-bold tracking-wide text-secondary">
              NUESTRA HISTORIA
            </h3>
          </div>

          <div className="flex w-full flex-wrap justify-center gap-8">
            {HISTORY.map((item, index) => (
              <div key={item.year} className="flex flex-col items-center gap-3 text-center">
                <span
                  className={`h-3 w-3 rounded-full ${
                    index === 0 ? 'bg-primary' : 'bg-surface'
                  }`}
                />
                <span className="font-serif text-xl font-bold text-title">{item.year}</span>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                  {item.title}
                </h4>
                <p className="max-w-sm text-sm leading-relaxed text-subtitle">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}