export function SectionHeading({ eyebrow, title, align = 'center' }) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span className="font-serif text-lg text-title italic">{eyebrow}</span>
      <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-secondary">
        {title}
      </h2>
      <span className="mt-1 h-2 w-2 rotate-45 bg-primary" aria-hidden="true" />
    </div>
  )
}
