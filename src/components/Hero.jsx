import heroImage from '../assets/images/hero.png'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mota Collection Hero"
          className="h-full w-full object-cover opacity-60 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-brand mb-6 bg-white/10 px-4 py-2 border border-brand/20">
            SINCE 1990 • BARAMATI
          </span>
          <h1 className="text-5xl font-serif font-medium leading-[1.1] text-white sm:text-7xl lg:text-8xl">
            Where Quality <br />
            <span className="italic font-light text-brand">Meets</span> Tradition
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300 font-light tracking-wide">
            Explore Mota Collection's world of premium cloth, readymade garments, 
            and specialist uniform manufacturing. A legacy of style in Baramati.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center border-2 border-brand bg-brand px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand"
            >
              Our Collections
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white/30 bg-transparent px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-brand hover:bg-brand/10"
            >
              Visit Our Store
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3 border-t border-white/10 pt-10">
            <div>
              <p className="text-xl font-serif text-white uppercase tracking-tighter">Women World</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Premium Wear</p>
            </div>
            <div>
              <p className="text-xl font-serif text-white uppercase tracking-tighter">Uniforms</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Expert Mfg</p>
            </div>
            <div>
              <p className="text-xl font-serif text-white uppercase tracking-tighter">Cloth</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Readymade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-brand to-transparent" />
      </div>
    </section>
  )
}

export default Hero
