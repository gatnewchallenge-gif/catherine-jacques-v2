import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const SCROLL_THRESHOLD = 500

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      aria-label="Retour en haut"
      onClick={scrollToTop}
      className={`fixed bottom-28 left-4 z-30 flex h-11 w-11 items-center justify-center border border-primary/30 bg-foreground text-background shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:bottom-6 lg:left-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={19} strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}
