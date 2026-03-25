import lehengaRed from '../assets/images/lehenga_red.jpg'
import lehengaGreen from '../assets/images/lehenga_green.png'
import sherwaniBlack from '../assets/images/sherwani_black.png'
import sherwaniWhite from '../assets/images/sherwani_white.jpg'
import sareeBlack from '../assets/images/saree_black.png'
import lehengaBrown from '../assets/images/lehenga_brown.jpg'
import sherwaniBlue from '../assets/images/sherwani_blue.jpg'
import bannerCouple1 from '../assets/images/banner_couple_1.jpg'
import bannerCouple2 from '../assets/images/banner_couple_2.jpg'

const photos = [
  { url: lehengaRed, alt: 'MOTA Red Bridal Lehenga' },
  { url: lehengaGreen, alt: 'MOTA Green Festive Lehenga' },
  { url: sherwaniBlack, alt: 'RAIVAT Black Designer Sherwani' },
  { url: sherwaniWhite, alt: 'RAIVAT White Wedding Sherwani' },
  { url: sareeBlack, alt: 'MOTA Black Premium Saree' },
  { url: lehengaBrown, alt: 'MOTA Gold & Brown Lehenga' },
  { url: sherwaniBlue, alt: 'RAIVAT Royal Blue Sherwani' },
  { url: bannerCouple1, alt: 'Mota Wedding Collection - Ad 1' },
  { url: bannerCouple2, alt: 'Mota Wedding Collection - Ad 2' },
]

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 dark:bg-slate-900/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand">
            Our Presence
          </span>
          <h2 className="mt-4 text-4xl font-serif font-medium text-slate-950 dark:text-white sm:text-6xl">
            Store <span className="italic font-light text-brand">Gallery</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Step into the world of Mota Baramati. A glimpse into our boutique experience, 
            premium collections, and our landmark presence in the heart of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {photos.map((photo, index) => (
            <div 
              key={photo.url} 
              className="relative overflow-hidden group glass-card hover-lift animate-fade-up aspect-[4/5]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
