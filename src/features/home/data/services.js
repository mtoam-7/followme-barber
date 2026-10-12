// Mock data — reemplazar por fetch a la API cuando esté lista.
import corteEstilo from '../../../assets/images/services/estiloycorte.jpg'
import cuidadoCapilar from '../../../assets/images/services/cuidadoCapilar.jpeg'
import barba from '../../../assets/images/services/barba.jpg'
import packVIP from '../../../assets/images/services/packVIP.jpeg'

export const SERVICE_CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'estilo-corte', label: 'Estilo y Corte' },
  { id: 'barba', label: 'Barba' },
  { id: 'cuidado-capilar', label: 'Cuidado Capilar' },
  { id: 'packs-vip', label: 'Packs VIP' },
]

export const SERVICES = [
  {
    id: 'corte-clasico',
    name: 'Corte Clásico',
    category: 'estilo-corte',
    categoryLabel: 'Estilo y Corte',
    description:
      'Técnica tradicional para un look temporal. Incluye lavado y peinado personalizado.',
    duration: '45 min',
    price: 180,
    image: corteEstilo,
  },
  {
    id: 'diseno-barba',
    name: 'Diseño de Barba',
    category: 'barba',
    categoryLabel: 'Barba',
    description:
      'Perfilado y afeitado con navaja para una barba definida y prolija.',
    duration: '30 min',
    price: 150,
    image: barba,
  },
  {
    id: 'tratamiento-capilar',
    name: 'Tratamiento Capilar',
    category: 'cuidado-capilar',
    categoryLabel: 'Cuidado Capilar',
    description:
      'Hidratación profunda y masaje capilar para fortalecer el cuero cabelludo.',
    duration: '40 min',
    price: 220,
    image: cuidadoCapilar,
  },
  {
    id: 'pack-vip',
    name: 'Pack VIP Completo',
    category: 'packs-vip',
    categoryLabel: 'Packs VIP',
    description:
      'Corte, barba y tratamiento capilar en una sola sesión, con bebida de cortesía.',
    duration: '90 min',
    price: 450,
    image: packVIP,
  },
]
