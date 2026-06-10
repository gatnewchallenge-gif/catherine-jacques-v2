import React from 'react'
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
