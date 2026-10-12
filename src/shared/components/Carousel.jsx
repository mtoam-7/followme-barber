import { useState } from 'react'

/**
 * Carrusel simple con paginación por puntos, sin dependencias externas.
 * `items` + `renderItem(item, index)` para mantenerlo reutilizable entre secciones.
 */
export function Carousel({ items, renderItem, className = '' }) {
  const [active, setActive] = useState(0)

  if (!items.length) return null

  return (
    <div className={className}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id ?? index} className="w-full shrink-0 grow-0 basis-full px-1">
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id ?? index}
              type="button"
              aria-label={`Ir a la diapositiva ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === active ? 'bg-primary' : 'bg-subtitle/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
