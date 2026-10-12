import interior1 from '../../../assets/images/gallery/interiores-1.jpeg'
import interior2 from '../../../assets/images/gallery/interiores-2.jpeg'
import herramienta1 from '../../../assets/images/gallery/herramientas-1.jpeg'
import herramienta2 from '../../../assets/images/gallery/herramientas-2.jpeg'
import estilo1 from '../../../assets/images/gallery/estilos-1.jpeg'
import estilo2 from '../../../assets/images/gallery/estilos-2.jpeg'

export const GALLERY_CATEGORIES = [
  { id: 'todo', label: 'Todo' },
  { id: 'interiores', label: 'Interiores' },
  { id: 'estilos-clasicos', label: 'Estilos Clásicos' },
  { id: 'herramientas', label: 'Herramientas y Detalles' },
]

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'interiores',
    alt: 'Interior del local con estaciones de corte',
    image: interior1,
  },
  {
    id: 'g2',
    category: 'estilos-clasicos',
    alt: 'Corte clásico terminado',
    image: estilo1,
  },
  {
    id: 'g3',
    category: 'herramientas',
    alt: 'Herramientas de barbería sobre la mesa de trabajo',
    image: herramienta1,
  },
  {
    id: 'g4',
    category: 'interiores',
    alt: 'Zona de espera del local',
    image: interior2,
  },
  {
    id: 'g5',
    category: 'estilos-clasicos',
    alt: 'Diseño de barba terminado',
    image: estilo2,
  },
  {
    id: 'g6',
    category: 'herramientas',
    alt: 'Herramientas de barbería sobre la mesa de trabajo',
    image: herramienta2,
  },
]