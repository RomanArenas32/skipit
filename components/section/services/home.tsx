import { Card, CardContent } from "@/components/ui/card"

export function ServicesHome() {
  return (
    <div className="min-h-screen bg-[#1a1150] text-white py-16 px-4 md:px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#FFD700]">AGENTS</span>
              <br />
              <span className="text-white">-AS-A-</span>
              <br />
              <span className="text-white">SERVICE</span>
            </h1>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FFD700] rounded-full opacity-20 blur-xl"></div>
            <Card className="bg-[#2a1f63]/50 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full mb-4"></div>
                <p className="text-gray-300">Empowering businesses with intelligent automation solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-[#FFD700]">Your Dedicated AI</span>
          <br />
          <span className="text-white">Development Team</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We are a small team of AI developers. Our team is leading one of the most popular AI Agent Development
          Frameworks called Agency Swarm.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              number: "10k+",
              label: "HOURS SAVED",
              description: "We saved thousands of employee hours.",
            },
            {
              number: "50+",
              label: "BUSINESSES AUTOMATED",
              description: "We work with businesses of all sizes.",
            },
            {
              number: "2.5k+",
              label: "STARS ON GITHUB",
              description: "We only use our own framework.",
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

