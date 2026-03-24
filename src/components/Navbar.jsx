const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-brand rotate-45 border-2 border-white shadow-lg" />
        <span className="relative z-10 text-xl font-serif font-black text-white italic">m</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-serif font-bold tracking-tight text-slate-950 dark:text-white leading-none">
          मोता
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-bold mt-1">
          — बारामती —
        </span>
      </div>
    </div>
  )
}

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-white/70 backdrop-blur-2xl transition-all duration-500 dark:border-white/5 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#hero"
          aria-label="Mota Collection Baramati Home"
          className="flex items-center transition-transform hover:scale-[1.02]"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition-all duration-300 hover:text-brand dark:text-slate-400 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-brand transition-colors duration-300"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-none border-2 border-brand bg-brand px-8 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand dark:text-white dark:hover:text-brand"
          >
            Visit Store
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
