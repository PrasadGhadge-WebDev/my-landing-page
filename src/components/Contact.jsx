const storePhoneNumber = '+918390955855'
const storePhoneLabel = '+91 83909 55855'
const storeAddress = 'Mota Collection, 4HXF+6R Baramati, Maharashtra'
const storeCoordinates = '18.148053804806505,74.57454727502562'
const mapsEmbedUrl =
  `https://www.google.com/maps?q=${storeCoordinates}&z=17&output=embed`
const directionsUrl =
  `https://www.google.com/maps/search/?api=1&query=${storeCoordinates}`

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-4xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-10 lg:p-20">
        <div className="flex flex-col gap-6 bg-slate-50 p-3 dark:bg-slate-800/50 sm:p-8">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900 sm:p-6">
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand">Store Location</p>
            <h3 className="mt-4 font-serif text-xl font-medium text-slate-950 dark:text-white sm:text-3xl">
              Visit Mota Collection in the heart of Baramati
            </h3>
            <p className="mt-4 text-xs font-light leading-6 text-slate-500 dark:text-slate-400 sm:text-sm sm:leading-7">
              Find us at {storeAddress}. Drop in for boutique styling, festive shopping,
              fabric selection, and uniform consultation with our in-store team.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/80 sm:p-4">
                <p className="text-[10px] uppercase font-bold tracking-[0.24em] text-brand">Address</p>
                <p className="mt-2 text-xs font-medium leading-5 text-slate-700 dark:text-slate-200 sm:text-sm sm:leading-6">
                  {storeAddress}
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/80 sm:p-4">
                <p className="text-[10px] uppercase font-bold tracking-[0.24em] text-brand">Contact</p>
                <a
                  href={`tel:${storePhoneNumber}`}
                  className="mt-2 inline-flex text-xs font-medium leading-5 text-slate-700 transition-colors hover:text-brand dark:text-slate-200 sm:text-sm sm:leading-6"
                >
                  {storePhoneLabel}
                </a>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-700">
              <iframe
                title="Mota Collection location"
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-48 w-full sm:h-72"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Get Directions"
                className="inline-flex items-center justify-center gap-2 bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-slate-950 dark:hover:bg-slate-800 sm:py-4 sm:flex-1"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Directions</span>
              </a>
              <a
                href={`tel:${storePhoneNumber}`}
                aria-label={`Call Store ${storePhoneLabel}`}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700 transition-all duration-300 hover:border-brand hover:text-brand dark:border-slate-600 dark:text-slate-200 dark:hover:border-brand dark:hover:text-brand sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.2em] sm:flex-1"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
