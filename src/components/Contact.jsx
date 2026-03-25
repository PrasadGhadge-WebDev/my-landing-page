function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="grid gap-16 lg:grid-cols-2 bg-white dark:bg-slate-900 p-10 lg:p-20 border border-slate-100 dark:border-slate-800">
        <div className="max-w-xl animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            Visit Baramati
          </span>
          <h2 className="mt-4 text-4xl font-serif font-medium text-slate-950 dark:text-white sm:text-5xl">
            Experience the Legacy
          </h2>
          <p className="mt-8 text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Step into our world of excellence in Baramati. From individual styling
            to bulk uniform requirements, Mota Collection provides unparalleled
            personal attention to every client.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-6 group">
              <div className="h-14 w-14 flex items-center justify-center border-2 border-brand bg-brand text-white transition-transform group-hover:scale-110">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-slate-950 dark:text-white">Mota Boutique</p>
                <p className="text-sm text-slate-500 font-light mt-1 uppercase tracking-widest">Bhigwan-Chowk, Baramati</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="h-14 w-14 flex items-center justify-center border-2 border-brand text-brand transition-transform group-hover:scale-110">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-slate-950 dark:text-white">Direct Connect</p>
                <p className="text-sm text-slate-500 font-light mt-1 uppercase tracking-widest">+91 Baramati-Store-Contact</p>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-6 p-8 bg-slate-50 dark:bg-slate-800/50">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-brand tracking-widest">Full Name</p>
              <input
                type="text"
                placeholder="Ex. Rahul Deshmukh"
                className="w-full border-b border-slate-200 dark:border-slate-600 bg-transparent py-3 text-sm font-light outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-brand tracking-widest">Phone Number</p>
              <input
                type="tel"
                placeholder="Ex. 98xxx xxxxx"
                className="w-full border-b border-slate-200 dark:border-slate-600 bg-transparent py-3 text-sm font-light outline-none transition-colors focus:border-brand"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-brand tracking-widest">Service Required</p>
            <select className="w-full border-b border-slate-200 dark:border-slate-600 bg-transparent py-3 text-sm font-light outline-none transition-colors focus:border-brand text-slate-400">
              <option>Select Business Segment</option>
              <option>Women World (Ethnic & Modern)</option>
              <option>Uniform Manufacturing (Bulk)</option>
              <option>Readymade Cloth & Fabrics</option>
              <option>Other Inquiries</option>
            </select>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold text-brand tracking-widest">Requirement Details</p>
            <textarea
              rows="4"
              placeholder="Tell us about your requirement..."
              className="w-full border-b border-slate-200 dark:border-slate-600 bg-transparent py-3 text-sm font-light outline-none transition-colors focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center bg-brand px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-slate-950 w-full sm:w-auto"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
