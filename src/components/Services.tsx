import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Vente immobilière',
    description: 'Une stratégie de commercialisation premium pour valoriser votre bien et vendre au meilleur prix.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Recherche et acquisition',
    description: 'Un accompagnement exclusif pour trouver la perle rare sur le secteur de Val d\'Europe.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Investissement immobilier',
    description: 'Conseil et analyse stratégique pour bâtir et optimiser votre patrimoine immobilier.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-xs mb-4 inline-block">
            Services d'Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
            Un accompagnement sur-mesure
          </h2>
          <p className="text-muted-foreground text-lg">
            Que vous soyez vendeur, acquéreur ou investisseur, je mets mon expertise à votre service pour concrétiser vos projets les plus ambitieux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                  <div className="h-0.5 w-12 bg-primary transition-all duration-300 group-hover:w-full mb-4" />
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                En savoir plus <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

