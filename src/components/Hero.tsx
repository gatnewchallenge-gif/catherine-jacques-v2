import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@blinkdotnew/ui'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dvtydeigi/video/upload/q_auto,f_auto/videoVisiteApt_1_stgq9k.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 z-10" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center md:text-left md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-medium opacity-90">
            Val d'Europe & Environs
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            L'immobilier à <br />
            <span className="italic font-normal">valeur ajoutée</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl opacity-90 leading-relaxed">
            J'accompagne vendeurs, acquéreurs et investisseurs sur le secteur de Val d'Europe et ses environs avec une approche fondée sur l'écoute, la confiance et l'expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              variant="primary" 
              size="lg" 
              className="rounded-none bg-white text-black hover:bg-white/90 border-none px-8 py-6 text-base font-medium"
            >
              Prendre rendez-vous
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
            >
              Découvrir mes services
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-70"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Découvrir</span>
        <ChevronDown size={20} strokeWidth={1} />
      </motion.div>
    </section>
  )
}
