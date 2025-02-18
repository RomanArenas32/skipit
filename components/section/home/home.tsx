import React from 'react'
import Image from 'next/image'
import { Button } from '../../ui/button'
import { Play } from 'lucide-react'

export const HomeSection = () => {
  return (
    <>
      <main className="container mx-auto px-4 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm text-gray-400 tracking-wider animate__animated animate__fadeInDown">
              Servicios a medida
            </p>
            <h1 className="text-4xl md:text-xl lg:text-6xl font-bold text-white leading-tight animate__animated animate__fadeInLeft">
              Escala tu negocio con <span className='text-[#FFD700]'>IA</span> 
              <span className="text-[#FFD700] block mt-2 text-4xl">Soluciones inteligentes para potenciar tus finanzas
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-black hover:bg-white/90"
              >
                Comienza ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10"
              >
                <Play className="mr-2 h-4 w-4" />
                ver mas
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://media.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.gif" // Nueva imagen animada
              alt="Imagen animada"
              fill
              className="object-contain animate__animated animate__zoomIn"
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}
