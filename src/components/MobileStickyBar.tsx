import React from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md">
      <div className="bg-foreground text-background shadow-2xl rounded-none flex items-center justify-between p-2">
        <a 
          href="https://wa.me/33600000000" 
          className="flex flex-col items-center justify-center flex-1 py-2 hover:bg-white/10 transition-colors border-r border-background/20"
        >
          <MessageCircle size={18} />
          <span className="text-[9px] uppercase tracking-tighter mt-1 font-medium">WhatsApp</span>
        </a>
        <a 
          href="tel:+33600000000" 
          className="flex flex-col items-center justify-center flex-1 py-2 hover:bg-white/10 transition-colors border-r border-background/20"
        >
          <Phone size={18} />
          <span className="text-[9px] uppercase tracking-tighter mt-1 font-medium">Appeler</span>
        </a>
        <a 
          href="#contact" 
          className="flex flex-col items-center justify-center flex-[1.5] py-2 bg-primary text-white transition-colors"
        >
          <Calendar size={18} />
          <span className="text-[9px] uppercase tracking-tighter mt-1 font-medium">Rendez-vous</span>
        </a>
      </div>
    </div>
  )
}
