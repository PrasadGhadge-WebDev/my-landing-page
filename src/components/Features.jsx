import sareeBlackImg from '../assets/images/saree_black.png'
import sherwaniBlackImg from '../assets/images/sherwani_black.png'
import lehengaRedImg from '../assets/images/lehenga_red.jpg'
import sherwaniWhiteImg from '../assets/images/feature_premium_sherwani.png'
import lehengaGreenImg from '../assets/images/lehenga_green.png'
import kidsFestiveImg from '../assets/images/kids_festive.png'

const collections = [
  {
    title: 'Bridal Saree',
    description: 'Elegant black and gold saree from our MOTA Woman World collection.',
    image: sareeBlackImg,
    accent: 'Women World',
  },
  {
    title: 'Mens Wedding Wear',
    description: 'Classic black sherwani for a sophisticated look from RAIVAT Collection.',
    image: sherwaniBlackImg,
    accent: 'Raivat Collection',
  },
  {
    title: 'Designer Lehenga',
    description: 'Stunning red and gold bridal lehenga, the centerpiece of our collection.',
    image: lehengaRedImg,
    accent: 'Mota Special',
  },
  {
    title: 'Premium Sherwani',
    description: 'Regal cream and red sherwani with intricate detailing for grooms.',
    image: sherwaniWhiteImg,
    accent: 'Raivat Wedding',
  },
  {
    title: 'Festive Lehenga',
    description: 'Beautiful green embroidered lehenga for festive celebrations.',
    image: lehengaGreenImg,
    accent: 'Celebration Wear',
  },
  {
    title: 'Kids Festive Wear',
    description: 'Vibrant and comfortable ethnic wear for children, perfect for celebrations.',
    image: kidsFestiveImg,
    accent: 'Mota Kids',
  },
]

function Features() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="text-center mb-12 sm:mb-20 animate-fade-up">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand">
          The World of Mota
        </span>
        <h2 className="mt-4 text-3xl font-serif font-medium text-slate-950 dark:text-white xs:text-4xl sm:text-6xl">
          Featured <span className="italic font-light text-brand">Collections</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed sm:text-lg">
          A cleaner showcase of bridal, festive, menswear, and premium in-store fashion
          selections from Mota Collection.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {collections.map((item, index) => (
          <article
            key={item.title}
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 animate-fade-up shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/5" />
            
            <div className="absolute inset-x-0 bottom-0 flex min-h-[15rem] flex-col justify-end p-8 sm:p-10">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-brand/90">
                {item.accent}
              </p>
              <h3 className="mb-4 min-h-[5.5rem] text-3xl font-serif leading-tight text-white sm:text-4xl">
                {item.title}
              </h3>
              <p className="min-h-[4.5rem] max-w-sm text-sm leading-relaxed text-slate-200 transition-opacity duration-300 group-hover:text-white">
                {item.description}
              </p>
              <div className="mt-6 h-[2px] w-16 bg-brand transition-all duration-500 group-hover:w-28 shadow-[0_0_15px_rgba(227,30,36,0.45)]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
