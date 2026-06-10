import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MessageCircle, Calendar, Globe, Share2, Users } from 'lucide-react'
import { Button } from '@blinkdotnew/ui'

const navLinks = [
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pourquoi moi', href: '#why-me' },
  { name: 'Parcours', href: '#journey' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-heading font-bold tracking-tight text-foreground">
            Catherine Jacques
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-medium">
            Consultante en immobilier
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" className="rounded-none px-6">
            Prendre rendez-vous
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
  key={link.name}
  type="button"
  className="text-lg font-medium py-2 border-b border-border/50 text-left"
  onClick={() => {
    const id = link.href.replace('#', '')
    const element = document.getElementById(id)

    if (element) {
  const y = element.getBoundingClientRect().top + window.scrollY - 100
  window.scrollTo({ top: y, behavior: 'smooth' })
}

    setIsMobileMenuOpen(false)
  }}
>
  {link.name}
</button>
              ))}
              <div className="flex gap-4 mt-4">
                <Button className="flex-1 rounded-none">Rendez-vous</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
