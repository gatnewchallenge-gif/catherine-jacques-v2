import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, MapPin, Users, Zap } from 'lucide-react'

const features = [
  {
    title: 'Accompagnement personnalisé',
    description: 'Une interlocutrice unique pour un suivi rigoureux et une écoute attentive de chaque instant.',
    icon: ShieldCheck,
  },
  {
    title: 'Expertise du marché local',
    description: 'Une connaissance fine et actualisée du secteur de Val d\'Europe et de la Seine-et-Marne.',
    icon: MapPin,
  },
  {
    title: 'Réseau de partenaires',
    description: 'Accès à des notaires, courtiers, diagnostiqueurs et artisans qualifiés pour sécuriser votre projet.',
    icon: Users,
  },
  {
    title: 'Disponibilité et réactivité',
    description: 'Une flexibilité maximale pour m\'adapter à vos contraintes et saisir les opportunités du marché.',
    icon: Zap,
  },
]

export function WhyWorkWithMe() {
  return (
    <section id="why-me" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
              Pourquoi moi ?
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight text-foreground">
              L'excellence immobilière <br />
              <span className="italic font-normal">au service de vos rêves</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Choisir Catherine Jacques, c'est s'assurer une tranquillité d'esprit totale et une valorisation optimale de votre patrimoine immobilier.
            </p>
            <div className="relative aspect-video overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
                 alt="Luxury Interior" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-y-12 gap-x-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary mb-2">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
