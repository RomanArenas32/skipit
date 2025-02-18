import { Card, CardContent } from "@/components/ui/card"

export function ServicesHome() {
  return (
    <div className="min-h-screen bg-[#1a1150] text-white py-16 px-4 md:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#FFD700]">SERVICIO</span>
              <br />

              <span className="text-white">PERSONALIZADO</span>
            </h1>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FFD700] rounded-full opacity-20 blur-xl"></div>
            <Card className="bg-[#2a1f63]/50 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full mb-4"></div>
                <p className="text-gray-300">Empoderando a las empresas con soluciones de automatización</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-[#FFD700]">Somos un equipo de consultoria</span>
          <br />
          <span className="text-white">impulsado por la innovacion en IA y las tecnologias mas avanzadas</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Compartenos tus ideas y nosotros las convertiremos en realidad.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "10k+",
              label: "HORAS AHORRADAS",
              description: "Ahorramos miles de horas de trabajo para tus empleados.",
            },
            {
              number: "50+",
              label: "CLIENTES SATISFECHOS",
              description: "Trabajamos con empresas de todas los tamanios.",
            },
            {
              number: "2.5k+",
              label: "INTEGRACIONES",
              description: "Soluciones completas e integradas.",
            },
          ].map((stat, index) => (
            <Card key={index} className="bg-[#2a1f63]/50 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 mb-4">{stat.label}</div>
                <p className="text-gray-300">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

