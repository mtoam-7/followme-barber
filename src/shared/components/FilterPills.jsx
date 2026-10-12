export function FilterPills({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {options.map((option) => {
        const isActive = option.id === active
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-colors ${
              isActive
                ? 'bg-primary text-background'
                : 'bg-surface text-subtitle hover:text-secondary'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}