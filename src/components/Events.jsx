import eventSilkSale from '../assets/images/event_silk_sale.png'
import eventSummerLaunch from '../assets/images/event_summer_launch.png'
import eventSareeWorkshop from '../assets/images/event_saree_workshop.png'

const events = [
  {
    id: 1,
    title: 'Festive Silk Sale',
    date: 'May 5 - May 12, 2026',
    description: 'A week-long celebration of silk. Enjoy exclusive offers on premium handloom sarees and ethnic wear for the festive season.',
    image: eventSilkSale,
    tag: 'Offers / Sales'
  },
  {
    id: 2,
    title: 'Grand Summer Launch',
    date: 'April 15, 2026',
    description: 'Join us for the unveiling of our exclusive Summer Collection. Experience the fusion of tradition and modern elegance.',
    image: eventSummerLaunch,
    tag: 'Product Launches'
  },
  {
    id: 3,
    title: 'Mastering the Saree',
    date: 'June 20, 2026',
    description: 'An intimate draping workshop and ethnic exhibition led by master stylists. Learn unique ways to style your wardrobe.',
    image: eventSareeWorkshop,
    tag: 'Workshops / Exhibitions'
  }
]

function Events() {
  return (
    <section id="events" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      <div className="text-center mb-12 sm:mb-20 animate-fade-up">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
          Stay Updated
        </span>
        <h2 className="mt-4 text-3xl font-serif font-medium text-slate-950 dark:text-white xs:text-4xl sm:text-5xl">
          Upcoming <span className="italic font-light text-brand">Events</span>
        </h2>
        <p className="mt-6 mx-auto max-w-2xl text-[14px] sm:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
          Be a part of the Mota legacy. Discover our upcoming store events, 
          collection launches, and exclusive member workshops.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <article
            key={event.id}
            className="group flex flex-col bg-white dark:bg-slate-900/40 glass-card overflow-hidden hover-lift animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-brand/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {event.tag}
              </div>
            </div>
            
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-8 bg-brand/40" />
                <time className="text-xs font-bold uppercase tracking-widest text-brand">
                  {event.date}
                </time>
              </div>
              <h3 className="text-2xl font-serif text-slate-950 dark:text-white mb-4">
                {event.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8 flex-1">
                {event.description}
              </p>
              <button className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-950 dark:text-white group/btn">
                <span>View Details</span>
                <svg 
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Events
