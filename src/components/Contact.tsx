import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@blinkdotnew/ui'
import { Phone, Mail, MessageCircle, Calendar, MapPin, Globe, Share2, Users } from 'lucide-react'

export function Contact() {
  const isSubmitted = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('sent') === '1'

  return (
    <section id="contact" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-secondary/30">
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
              <form action="https://formsubmit.co/contact.techsolidaires.ai@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="Nouvelle demande - Maison Signature" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://catherine-jacques-v2.vercel.app/?sent=1#contact" />
                {isSubmitted && (
                  <p role="status" className="text-sm text-primary">
                    Merci, votre demande a bien été envoyée. Nous vous répondrons dans les meilleurs délais.
                  </p>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Prénom & Nom</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Email</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      placeholder="jean@email.com"
                      className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold opacity-70">Sujet</label>
                  <select name="subject" required className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
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
                    name="message"
                    required
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full bg-secondary/50 border-none px-4 py-3 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full rounded-none py-6 font-bold uppercase tracking-widest">
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
                      <a href="tel:0652810355" className="text-lg font-medium hover:underline underline-offset-4">06 52 81 03 55</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Email</p>
                      <a href="mailto:contact.techsolidaires.ai@gmail.com" className="text-lg font-medium hover:underline underline-offset-4">contact.techsolidaires.ai@gmail.com</a>
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
                <p className="text-[10px] uppercase tracking-widest opacity-70 mb-6">Suivez-nous</p>
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
