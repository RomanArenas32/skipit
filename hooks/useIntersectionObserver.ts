"use client"

import { useRef, useEffect, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({ threshold = 0.1, rootMargin = "0px" }: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return [ref, isIntersecting]
}

