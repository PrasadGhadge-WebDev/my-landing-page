function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand rotate-45 border border-white" />
              <span className="relative z-10 text-xs font-serif font-black text-white italic">m</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-widest text-slate-950 dark:text-white">
              MOTA <span className="font-light text-brand">BARAMATI</span>
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            &copy; {new Date().getFullYear()} Mota Collection. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 dark:text-slate-700">
            Cloth & Readymade • Women World • Uniform Manufacturing
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
