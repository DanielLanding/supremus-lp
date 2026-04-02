"use client"

import { useEffect, useRef } from "react"

const PESSOAS = Array.from({ length: 11 }, (_, i) => `/pessoa${i}`)
const DOUBLED = [...PESSOAS, ...PESSOAS]

export function MarqueeCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (carouselRef.current && trackRef.current) {
            const rect = carouselRef.current.getBoundingClientRect()
            const viewHeight = window.innerHeight
            const startBlurAt = viewHeight * 1.1
            const fullyClearAt = viewHeight * 0.65

            let currentBlur = 0
            if (rect.top > startBlurAt) {
              currentBlur = 15
            } else if (rect.top < fullyClearAt) {
              currentBlur = 0
            } else {
              const range = startBlurAt - fullyClearAt
              const progress = (rect.top - fullyClearAt) / range
              currentBlur = progress * 15
            }

            trackRef.current.style.filter = currentBlur > 0.1 ? `blur(${currentBlur}px)` : "none"
          }
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={carouselRef} className="carousel-wrapper w-full overflow-hidden relative" style={{ background: "#f5f5f7", zIndex: 1 }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-10"
        style={{ height: "calc(100% - 3rem)", backgroundColor: "var(--navy-dark)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none -z-10"
        style={{ height: "3rem", background: "linear-gradient(to bottom, var(--navy-dark) 0%, #f5f5f7 100%)" }}
      />
      <div ref={trackRef} className="marquee-track relative z-10" style={{ willChange: "filter" }}>
        {DOUBLED.map((src, i) => (
          <div key={i} className="marquee-card shrink-0 shadow-none">
            <img
              src={src}
              alt={`Participante ${i + 1}`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
