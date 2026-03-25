import legacyImg from '../assets/images/about_legacy.png'

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
          <div className="relative order-2 lg:order-1 animate-fade-right">
            <div className="aspect-[4/5] overflow-hidden bg-slate-100 shadow-2xl">
              <img
                src={legacyImg}
                alt="Mota Collection Legacy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-brand p-8 hidden sm:flex items-center justify-center">
              <span className="text-4xl font-serif font-bold text-white italic">30+</span>
            </div>
            <div className="absolute -top-6 -left-6 h-32 w-32 border-2 border-brand/20 hidden sm:block" />
          </div>

          <div className="lg:order-2 animate-fade-up">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand">
              Our Legacy Since 1990
            </span>
            <h2 className="mt-4 text-3xl font-serif font-medium text-slate-950 dark:text-white sm:text-6xl">
              The Journey of <span className="italic font-light text-brand">Excellence</span>
            </h2>
            <div className="mt-10 space-y-8 text-lg leading-relaxed text-slate-500 dark:text-slate-400 font-light">
              <p>
                Established in 1990 in the heart of Baramati, Mota Collection began 
                with a simple vision: to provide the finest fabrics and garments 
                with unmatched personal service.
              </p>
              <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-slate-500 dark:text-slate-400 font-light">
              <p>
                From the retail elegance of Women's World and premium Cloth &
                Readymade to the precision of Uniform Manufacturing, Mota has
                become synonymous with trust and quality.
              </p>
            </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-10 dark:border-slate-800">
              <div>
                <p className="text-3xl font-serif text-slate-950 dark:text-white">1990</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">Established</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-slate-950 dark:text-white">3+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">Business Verticals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
