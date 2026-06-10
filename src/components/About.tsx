import React from 'react'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden transition-all duration-700">
              <img
                src="/images/catherine.png"
                alt="Catherine Jacques"
                
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-primary/30 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-primary/30 z-0" />
            <div className="absolute top-12 -right-12 w-full h-full bg-secondary/50 -z-10" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
              Mon Engagement
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight text-foreground">
              Une approche humaine de l'immobilier
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Passionnée par l'immobilier et le contact humain, j'ai choisi d'exercer ce métier avec une vision différente : placer l'humain au cœur de chaque transaction.
              </p>
              <p>
                Mon rôle dépasse la simple mise en relation. Je suis votre partenaire de confiance, celle qui vous écoute, comprend vos enjeux et vous accompagne avec une expertise pointue du marché de Val d'Europe et ses environs.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { label: 'Écoute', description: 'Comprendre vos besoins réels' },
                { label: 'Confiance', description: 'Une relation transparente' },
                { label: 'Expertise', description: 'Une connaissance locale unique' },
                { label: 'Sur-mesure', description: 'Un accompagnement dédié' },
              ].map((value) => (
                <div key={value.label}>
                  <h3 className="text-foreground font-heading font-semibold text-xl mb-1">{value.label}</h3>
                  <p className="text-sm text-muted-foreground italic">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
