"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Arsenij's team has redefined innovation in our industry, elevating our operational effectiveness to new heights. Their commitment to excellence and detail has fueled our substantial growth. Partnering with them means choosing unparalleled ingenuity and success. I wholeheartedly endorse their excellence.",
    author: "Richard King",
    role: "VP Product Marketing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gEFSZzorO73d88NMJeAN6kW31Y9BkW.png",
  },
  {
    quote:
      "Working with this team has transformed our business processes completely. Their innovative solutions have helped us achieve unprecedented efficiency levels.",
    author: "Sarah Chen",
    role: "CTO, TechForward",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The level of professionalism and technical expertise demonstrated by the team is outstanding. They've become an invaluable partner in our digital transformation journey.",
    author: "Marcus Rodriguez",
    role: "Director of Operations",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export const ReferencesHome = () => {
  return (
    <div className="bg-[#0a0b1e] py-16 px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-white/80 text-sm uppercase tracking-wider mb-4">TESTIMONIALS</h2>
        <h3 className="text-[#ffd700] text-4xl font-bold">From Our Clients</h3>
      </div>

      <Carousel className="w-full max-w-4xl">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card className="bg-transparent border-none">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">{testimonial.quote}</p>
                  <div className="mt-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
        <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
      </Carousel>
    </div>
  )
}

