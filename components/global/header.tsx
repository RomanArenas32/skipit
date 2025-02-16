"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Hexagon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-md shadow-sm" : "bg-[#0B0B1E]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Hexagon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-white">Skip IT</span>
          </Link>

       
          <Button size="sm" className="bg-yellow-600 text-primary-foreground hover:bg-yellow-800 font-bold">
            Comencemos!
          </Button>
        </div>
      </div>
    </header>
  )
}

