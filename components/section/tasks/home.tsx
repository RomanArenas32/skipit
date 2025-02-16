import { ArrowRight, BarChart3, Brain, Cog, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const TasksHome = () => {
  const benefits = [
    {
      icon: <RefreshCw className="w-8 h-8 text-yellow-400" />,
      title: "Boost Efficiency",
      description:
        "Outsource even the most complex in your business. Not just drafting emails.",
    },
    {
      icon: <Cog className="w-8 h-8 text-violet-400" />,
      title: "Reduce Mistakes",
      description:
        "Once your agents are fine tuned, they require minimal to no supervision",
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: "Stay Ahead",
      description:
        "Adapt quickly to new advancements in AI with OpenAI Assistants API",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Scale Seamlessly",
      description:
        "Add more agents as needed. Scale without affecting your overhead.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Sección de encabezado */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4 animate__animated animate__fadeInDown">
            OUR BENEFITS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 animate__animated animate__fadeInDown animate__delay-1s">
            Automate Roles, Not
            <br />
            Just Tasks
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 animate__animated animate__fadeInUp animate__delay-2s">
            Unlock unprecedented growth by integrating AI Agents into your operations.
            Experience the transformative benefits:
          </p>
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
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
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
