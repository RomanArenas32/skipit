"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation: string
  duration?: number
  delay?: number
  once?: boolean
}

export function AnimateOnScroll({ children, animation, duration = 1, delay = 0, once = true }: AnimateOnScrollProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    } else if (!isIntersecting && !once) {
      setHasAnimated(false)
    }
  }, [isIntersecting, once, hasAnimated])

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className={`transition-opacity duration-300 ease-in-out ${hasAnimated ? "opacity-100" : "opacity-0"}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      <div className={hasAnimated ? `animate__animated ${animation}` : ""}>{children}</div>
    </div>
  )
}

