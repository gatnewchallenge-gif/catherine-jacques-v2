import React from 'react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-xl font-heading font-bold tracking-tight text-foreground">
                Catherine Jacques
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                Consultante en immobilier
              </span>
            </div>
            <p className="text-muted-foreground text-sm italic mb-6">
              "L'immobilier à valeur ajoutée"
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-foreground mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-foreground mb-6">Secteur</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Val d'Europe</li>
              <li>Serris & Chessy</li>
              <li>Magny-le-Hongre</li>
              <li>Bailly-Romainvilliers</li>
              <li>Seine-et-Marne (77)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-foreground mb-6">Légal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Honoraires</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Catherine Jacques. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Site Web</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
