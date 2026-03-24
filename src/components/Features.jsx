import traditionalImg from '../assets/images/traditional.png'
import uniformsImg from '../assets/images/uniforms.png'
import readymadeImg from '../assets/images/readymade.png'

const collections = [
  {
    title: "Women's World",
    description: 'A curated paradise of premium ethnic and contemporary wear for women.',
    image: traditionalImg,
  },
  {
    title: 'Uniform Manufacturing',
    description: 'Quality manufacturing of school, corporate, and industrial uniforms.',
    image: uniformsImg,
  },
  {
    title: 'Cloth & Readymade',
    description: 'The finest selection of unstitched fabrics and premium readymade garments.',
    image: readymadeImg,
  },
]

function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="text-center mb-20 animate-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand">
          The World of Mota
        </span>
        <h2 className="mt-4 text-4xl font-serif font-medium text-slate-950 dark:text-white sm:text-6xl">
          Our Business <span className="italic font-light text-brand">Segments</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
          From the finest threads of Women World to the precision of Uniform 
          Manufacturing, Mota Collection is a legacy of excellence in Baramati.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((item, index) => (
          <article
            key={item.title}
            className="group relative h-[550px] overflow-hidden bg-slate-200 animate-fade-up shadow-2xl"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <h3 className="text-3xl font-serif text-white mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 font-light h-0 opacity-0 transition-all duration-500 group-hover:h-auto group-hover:opacity-100 mb-6">
                {item.description}
              </p>
              <div className="h-[2px] w-0 bg-brand transition-all duration-700 group-hover:w-full shadow-[0_0_15px_rgba(227,30,36,0.8)]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
