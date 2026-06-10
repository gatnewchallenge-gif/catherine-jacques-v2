import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Découverte du projet',
    description: 'Une première rencontre pour faire connaissance et comprendre vos aspirations profondes.',
  },
  {
    number: '02',
    title: 'Analyse des besoins',
    description: 'Une étude détaillée du marché et de la faisabilité pour définir une stratégie gagnante.',
  },
  {
    number: '03',
    title: 'Accompagnement personnalisé',
    description: 'Un suivi quotidien, de la mise en valeur du bien aux visites et négociations.',
  },
  {
    number: '04',
    title: 'Réalisation du projet',
    description: 'Signature de l\'acte authentique et remise des clés. Votre satisfaction est ma réussite.',
  },
]

export function ClientJourney() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
            Votre Parcours
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Les étapes de votre succès
          </h2>
          <p className="text-muted-foreground text-lg">
            Une méthodologie rigoureuse pour une expérience fluide et sans stress.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Desktop only */}
          <div className="hidden lg:block absolute top-[1.35rem] left-0 right-0 h-[1px] bg-border z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 text-center lg:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary font-bold mb-6 mx-auto lg:mx-0 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative aspect-[21/9] overflow-hidden grayscale opacity-60">
           <img 
             src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" 
             alt="Real Estate Concept" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}
