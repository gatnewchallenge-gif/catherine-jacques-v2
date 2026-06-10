import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Famille Morel',
    role: 'Vendeurs à Serris',
    content: 'Catherine a su valoriser notre maison avec une élégance rare. Son professionnalisme et son écoute ont fait toute la différence. Une vente rapide et sereine.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Thomas & Julie',
    role: 'Acquéreurs à Chessy',
    content: 'Nous cherchions depuis des mois sans succès. Catherine a trouvé notre coup de cœur en seulement deux semaines. Son réseau est impressionnant.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Marc L.',
    role: 'Investisseur patrimonial',
    content: 'Une expertise du marché local hors pair. Catherine Jacques est bien plus qu\'une consultante, c\'est une stratège de l\'immobilier de confiance.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Ils m'ont fait confiance
          </h2>
          <p className="text-muted-foreground text-lg">
            La plus belle récompense est la satisfaction et la fidélité de mes clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/20 p-8 flex flex-col items-center text-center group hover:bg-secondary/40 transition-colors duration-300"
            >
              <div className="mb-6 relative">
                 <div className="w-20 h-20 rounded-none grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden border border-border p-1">
                   <img 
                     src={testimonial.avatar} 
                     alt={testimonial.name} 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 text-white">
                    <Quote size={12} fill="currentColor" />
                 </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{testimonial.name}</h3>
              <p className="text-primary text-[10px] uppercase tracking-widest font-semibold mb-6">{testimonial.role}</p>
              <p className="text-muted-foreground italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
