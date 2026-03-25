import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Events', href: '#events' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand rotate-45 border-2 border-white shadow-lg" />
        <span className="relative z-10 text-lg sm:text-xl font-serif font-black text-white italic">m</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-slate-950 dark:text-white leading-none">
          मोता
        </span>
        <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-brand font-bold mt-0.5 sm:mt-1">
          — बारामती —
        </span>
      </div>
    </div>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-white/95 backdrop-blur-3xl transition-all duration-500 dark:border-white/5 dark:bg-slate-950/95">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            aria-label="Mota Collection Baramati Home"
            className="flex items-center transition-transform hover:scale-[1.02]"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-all duration-300 hover:text-brand dark:text-slate-400 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-6">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="flex items-center justify-center rounded-full bg-slate-100 p-2 text-[9px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all duration-300"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-none border-2 border-brand bg-brand px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand dark:text-white dark:hover:text-brand"
            >
              Visit Store
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center text-slate-950 dark:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside Header for stacking */}
      {isOpen && (
        <div className="fixed inset-0 z-[80] bg-white dark:bg-slate-950 lg:hidden pt-[90px] overflow-y-auto">
          <nav className="flex flex-col items-center gap-1 p-8" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full py-5 text-center text-2xl font-serif font-medium uppercase tracking-[0.1em] text-slate-950 dark:text-white border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-12 inline-flex w-full max-w-xs items-center justify-center bg-brand px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-xl"
            >
              Visit Our Store
            </a>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
