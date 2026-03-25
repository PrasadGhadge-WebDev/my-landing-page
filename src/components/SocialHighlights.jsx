
const reels = [
  { url: 'https://www.instagram.com/p/DBjCoD2SaRs/embed', id: 'reel-1' },
  { url: 'https://www.instagram.com/reel/DWRG6BkCF1p/embed', id: 'reel-2' },
  { url: 'https://www.instagram.com/reel/DWJZI5MiNjC/embed', id: 'reel-3' },
  { url: 'https://www.instagram.com/reel/DWBr2s2iF8U/embed', id: 'reel-4' },
]

function SocialHighlights() {
  return (
    <section id="highlights" className="bg-slate-50 dark:bg-slate-900/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand">
            Store Highlights
          </span>
          <h2 className="mt-4 text-3xl font-serif font-medium text-slate-950 dark:text-white sm:text-5xl">
            Experience the Legacy
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Experience the latest collections and festive vibes directly from our store in Baramati.
            Discover the magic of Mota through our curated social highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="w-full aspect-[9/16] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(15,23,42,0.18)] glass-card animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <iframe
                src={reel.url}
                className="h-full w-full border-0"
                allowTransparency="true"
                allow="encrypted-media"
                scrolling="no"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/mota_collection_baramati/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950 dark:text-white hover:text-brand dark:hover:text-brand transition-colors duration-300"
          >
            <span>Follow us on Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialHighlights
