const featuredPieces = [
  {
    name: 'The Royal Heritage',
    price: 'Starting from ₹15,000',
    description: 'Hand-embroidered silk ensembles for grand celebrations and festive evenings.',
    details: ['Pure Mulberry Silk', 'Zardosi Work', 'Bespoke Fitting'],
    cta: 'Inquire Now',
    featured: true,
  },
  {
    name: 'Uniform Excellence',
    price: 'Bulk Pricing Available',
    description: 'Specialist manufacturing of school and corporate uniforms with durable, premium fabrics.',
    details: ['Custom Designs', 'Bulk Production', 'Quality Assurance'],
    cta: 'Get Quote',
    featured: false,
  },
  {
    name: 'Women World',
    price: 'Curated Collection',
    description: 'Modern silhouettes and traditional drapes selected for the sophisticated woman.',
    details: ['Latest Trends', 'Brand Varieties', 'Expert Styling'],
    cta: 'Visit Boutique',
    featured: false,
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-2xl text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">
          Exclusive Curation
        </span>
        <h2 className="mt-4 text-4xl font-serif font-medium text-slate-950 dark:text-white sm:text-5xl">
          Signature Offerings
        </h2>
        <div className="mt-6 mx-auto h-[1px] w-24 bg-brand" />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {featuredPieces.map((piece) => (
          <article
            key={piece.name}
            className={`flex flex-col p-10 transition-all duration-500 hover-lift ${
              piece.featured
                ? 'bg-brand text-white shadow-2xl'
                : 'bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800'
            }`}
          >
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-serif">{piece.name}</h3>
              {piece.featured && (
                <span className="text-[10px] font-bold uppercase tracking-widest border border-white px-2 py-1 text-white">
                  Best Seller
                </span>
              )}
            </div>
            
            <p className={`text-xl font-light mb-6 ${piece.featured ? 'text-white/90' : 'text-brand'}`}>
              {piece.price}
            </p>
            
            <p className={`text-sm font-light leading-relaxed mb-8 ${piece.featured ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
              {piece.description}
            </p>
            
            <ul className="mb-10 space-y-4 flex-grow">
              {piece.details.map((detail) => (
                <li key={detail} className="flex items-center gap-4 text-xs uppercase tracking-widest font-medium opacity-80">
                  <span className={`h-[1px] w-4 ${piece.featured ? 'bg-white' : 'bg-brand'}`} />
                  {detail}
                </li>
              ))}
            </ul>
            
            <a
              href="#contact"
              className={`inline-flex items-center justify-center py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                piece.featured
                  ? 'bg-white text-brand hover:bg-slate-950 hover:text-white'
                  : 'bg-brand text-white hover:bg-slate-950'
              }`}
            >
              {piece.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
