import { ArrowRight, BarChart3, Brain, Cog, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const TasksHome = () => {
  const benefits = [
    {
      icon: <RefreshCw className="w-8 h-8 text-yellow-400" />,
      title: "Aumenta la Eficiencia",
      description:
        "Externaliza incluso las tareas más complejas de tu negocio, mucho más que solo redactar correos.",
    },
    {
      icon: <Cog className="w-8 h-8 text-violet-400" />,
      title: "Reduce Errores",
      description:
        "Una vez optimizados, tus procesos requieren mínima o ninguna supervisión.",
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: "Mantente a la Vanguardia",
      description:
        "Adáptate rápidamente a los avances más recientes en IA con la API de Asistentes de OpenAI.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Escala sin Esfuerzo",
      description:
        "Añade más agentes según sea necesario. Expande sin aumentar tus costos operativos.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sección de encabezado */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4 animate__animated animate__fadeInDown">
            TUS BENEFICIOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 animate__animated animate__fadeInDown animate__delay-1s">
            Automatizar funciones
            <br />
            No solo procesos
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">
          Impulsa un crecimiento sin precedentes con soluciones de IA autónomas y avanzadas          </p>
        </div>

        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            // Para agregar un delay escalonado a cada tarjeta:
            const delay = index === 0 ? '' : `animate__delay-${index}s`
            return (
              <Card
                key={index}
                className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors animate__animated animate__fadeInUp ${delay}`}
              >
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-2xl mb-2 text-white font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-6">{benefit.description}</p>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
