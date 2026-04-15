'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-choco-gradient text-white">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs tracking-[0.12em] uppercase font-medium gap-3">
        <span className="w-1.5 h-1.5 rounded-full gold-dot flex-shrink-0 animate-pulse-dot" />
        <p>Free shipping on orders over $45 &mdash; Fresh-baked &amp; shipped same week</p>
        <span className="w-1.5 h-1.5 rounded-full gold-dot flex-shrink-0 animate-pulse-dot" />
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
