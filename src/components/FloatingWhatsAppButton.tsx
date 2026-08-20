import React from 'react'

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2a9.9 9.9 0 0 0-8.52 14.94L2.1 22l5.18-1.36A9.98 9.98 0 1 0 12 2Z"
      />
      <path
        fill="#fff"
        d="M8.15 6.83c.2-.44.4-.45.59-.46h.5c.16 0 .43.06.65.55.23.5.78 1.92.85 2.06.07.13.11.29.02.46-.08.17-.13.28-.26.43-.13.14-.27.32-.39.43-.13.13-.26.27-.11.53.15.26.66 1.08 1.42 1.75.97.87 1.8 1.14 2.05 1.27.26.13.41.11.56-.07.15-.17.65-.75.82-1.01.17-.26.34-.22.57-.13.24.09 1.49.7 1.75.83.26.13.43.19.49.3.07.11.07.63-.15 1.24-.21.6-1.27 1.16-1.75 1.23-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55a12.5 12.5 0 0 1-4.76-4.2c-.35-.47-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.38Z"
      />
    </svg>
  )
}

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/33652810355"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-28 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fbd5a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon />
    </a>
  )
}
