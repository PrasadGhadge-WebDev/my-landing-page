const testimonials = [
  {
    quote:
      "The attention to detail in their ethnic collection is simply unmatched. The fit was perfect, and the fabric felt incredibly premium.",
    author: 'Ananya Sharma',
    role: 'Fashion Consultant',
  },
  {
    quote:
      "I found the perfect blend of modern silhouettes and traditional craftsmanship here. Mota Collection is my new go-to for festive wear.",
    author: 'Vikram Malhotra',
    role: 'Entrepreneur',
  },
  {
    quote:
      "Their boutique in Baramati offers an incredible selection. They truly understand the art of creating a masterpiece.",
    author: 'Riya Kapoor',
    role: 'Stylist',
  },
]

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 dark:bg-slate-950/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
            Client Stories
          </span>
          <h2 className="mt-4 text-4xl font-serif font-medium text-slate-950 dark:text-white sm:text-5xl">
            Voices of Elegance
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="flex flex-col justify-between border border-slate-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-10 hover-lift"
            >
              <div>
                <div className="flex gap-1 text-brand mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-base font-light italic leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-10 border-t border-slate-100 dark:border-slate-800 pt-6">
                <p className="font-serif text-xl text-slate-950 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand mt-1">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
