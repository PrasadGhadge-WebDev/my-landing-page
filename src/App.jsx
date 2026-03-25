import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import ContactFooterBar from './components/ContactFooterBar'
import Footer from './components/Footer'
import SocialHighlights from './components/SocialHighlights'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('mota-theme')
    return savedTheme ?? 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('mota-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-stone-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="relative isolate flex min-h-screen flex-col">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_38%),radial-gradient(circle_at_right,_rgba(129,140,248,0.12),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_38%),radial-gradient(circle_at_right,_rgba(129,140,248,0.16),_transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 h-[48rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7),_transparent_55%)] opacity-60 dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_55%)] dark:opacity-100" />
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <div className="relative flex-1 pt-24">
          <main className="h-full">
            <Hero />
            <Features />
            <Events />
            <SocialHighlights />
            <Testimonials />
            <Pricing />
            <About />
            <Contact />
            <Footer />
          </main>
        </div>
        <ContactFooterBar />
      </div>
    </div>
  )
}

export default App
