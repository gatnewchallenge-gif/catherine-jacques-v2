import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyWorkWithMe } from './components/WhyWorkWithMe'
import { ClientJourney } from './components/ClientJourney'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { MobileStickyBar } from './components/MobileStickyBar'

export default function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (!hash) return

      setTimeout(() => {
        const element = document.getElementById(hash)

        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          })
        }
      }, 500)
    }

    scrollToHash()

    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyWorkWithMe />
        <ClientJourney />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}
