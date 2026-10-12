export function Button({
  as = 'button',
  href,
  target,
  rel,
  onClick,
  children,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200'
  const variants = {
    primary: 'bg-primary text-background hover:bg-accent/90',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-background',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a' || href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
