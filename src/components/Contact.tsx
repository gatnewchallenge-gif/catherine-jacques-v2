import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@blinkdotnew/ui'
import { Phone, Mail, MessageCircle, Calendar, MapPin, Globe, Share2, Users } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-background shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Form Column */}
            <div className="p-8 md:p-12">
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
                Parlons de votre projet
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground leading-tight">
                Parlons de votre projet immobilier
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Prénom & Nom</label>
                    <input 
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Email</label>
                    <input 
                      type="email" 
                      placeholder="jean@email.com"
                      className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Sujet</label>
                  <select className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                    <option>Vente immobilière</option>
                    <option>Recherche et acquisition</option>
                    <option>Investissement</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Comment puis-je vous aider ?"
                    className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full rounded-none py-6 font-bold uppercase tracking-widest">
                  Envoyer ma demande
                </Button>
              </form>
            </div>

            {/* Info Column */}
            <div className="bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-8">Coordonnées</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Téléphone</p>
                      <a href="tel:+33600000000" className="text-lg font-medium hover:underline underline-offset-4">+33 6 00 00 00 00</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Email</p>
                      <a href="mailto:contact@catherine-jacques.fr" className="text-lg font-medium hover:underline underline-offset-4">contact@catherine-jacques.fr</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Secteur</p>
                      <p className="text-lg font-medium">Val d'Europe & environs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[10px] uppercase tracking-widest opacity-70 mb-6">Suivez-moi</p>
                <div className="flex gap-4">
                  {[
                    { icon: Globe, href: '#' },
                    { icon: Share2, href: '#' },
                    { icon: Users, href: '#' },
                    { icon: MessageCircle, href: '#' },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
