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
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="relative flex h-9 w-9 items-center justify-center sm:h-12 sm:w-12">
        <div className="absolute inset-0 rotate-45 border-2 border-white bg-brand shadow-lg" />
        <span className="relative z-10 text-lg font-serif font-black italic text-white sm:text-xl">m</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif font-bold leading-none tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          Mota
        </span>
        <span className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.24em] text-brand sm:mt-1 sm:text-[10px] sm:tracking-[0.3em]">
          Baramati
        </span>
      </div>
    </div>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="fixed left-0 top-0 z-[100] w-full border-b border-white/10 bg-white/95 backdrop-blur-3xl transition-all duration-500 dark:border-white/5 dark:bg-slate-950/95">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 lg:px-8">
          <a
            href="#hero"
            aria-label="Mota Collection Baramati Home"
            className="shrink-0 transition-transform hover:scale-[1.02]"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 transition-all duration-300 hover:text-brand dark:text-slate-400 dark:hover:text-brand 2xl:text-[11px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="inline-flex h-10 items-center justify-center rounded-full bg-slate-100 px-3 text-[9px] font-bold uppercase tracking-wider text-slate-600 transition-all duration-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 sm:px-4"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>

            <a
              href="#contact"
              className="hidden items-center rounded-none border-2 border-brand bg-brand px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand dark:text-white dark:hover:text-brand sm:inline-flex xl:px-6 xl:text-xs"
            >
              Visit Store
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center text-slate-950 dark:text-white xl:hidden"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {isOpen && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-white pt-24 dark:bg-slate-950 xl:hidden">
          <nav className="flex flex-col items-center gap-1 px-6 pb-10" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full border-b border-slate-100 py-4 text-center text-xl font-serif font-medium uppercase tracking-[0.1em] text-slate-950 dark:border-slate-800 dark:text-white last:border-0 sm:text-2xl"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex w-full max-w-sm items-center justify-center bg-brand px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all"
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
