import { useState } from 'react'
import { NAV_LINKS } from '../constants/nav'
import { SITE } from '../constants/site'
import { Button } from './Button'
import { whatsappGeneral } from '../utils/contactWhatsapp'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => setIsOpen(false)

  return (
      <header className="fixed z-50 w-full bg-linear-to-b from-background from-90% via-background/99 to-transparent">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-6 py-6">
        <a href="#inicio" className="text-title text-2xl font-serif font-bold tracking-widest">
          {SITE.name}
        </a>

        <div className="ml-auto hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-text/90 transition-colors hover:text-title"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button href={whatsappGeneral()} target="_blank" rel="noreferrer">
            Reservar
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-icon transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-px w-6 bg-icon transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-6 bg-icon transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-surface bg-background/95 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-sm font-semibold tracking-wide text-text/90"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={whatsappGeneral()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full"
              onClick={handleNavClick}
            >
              Reservar
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
