function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rotate-45 border border-white bg-brand" />
              <span className="relative z-10 text-xs font-serif font-black italic text-white">m</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-widest text-slate-950 dark:text-white">
              MOTA <span className="font-light text-brand">BARAMATI</span>
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            &copy; {new Date().getFullYear()} Mota Collection. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-brand"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-slate-400 transition-all duration-300 hover:scale-110 hover:text-brand"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 dark:text-slate-700">
            Cloth & Readymade | Women World | Uniform Manufacturing
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
