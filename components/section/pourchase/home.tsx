import { Building2, MessageSquare, BuildingIcon as Buildings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export const PurchaseHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b1a] to-[#1a103f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Simple Month-to-Month Pricing</h1>
          <p className="text-gray-400">
            Our goal is to give you a flexible solution that can grow with your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Consulting Plan */}
          <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
            <CardHeader className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-medium">CONSULTING</h3>
              <div className="text-3xl font-bold">
                $247<span className="text-sm text-gray-400">/h</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Feature enabled>Strategic roadmap development</Feature>
              <Feature enabled>Custom AI agent development</Feature>
              <Feature enabled={false}>Dedicated Project Manager</Feature>
              <Feature enabled={false}>Private Communication Channel</Feature>
              <Feature enabled={false}>1 week/agent avg. delivery time</Feature>
              <Feature enabled={false}>Continuous Optimization and Support</Feature>
              <Feature enabled={false}>Multiple AI agent projects simultaneously</Feature>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                Get Expert Advice
              </Button>
            </CardFooter>
          </Card>

          {/* Business Plan */}
          <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
            <CardHeader className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-medium">BUSINESS</h3>
              <div className="text-3xl font-bold">
                $6300<span className="text-sm text-gray-400">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Feature enabled>Strategic roadmap development</Feature>
              <Feature enabled>Custom AI agent development</Feature>
              <Feature enabled>Dedicated Project Manager</Feature>
              <Feature enabled>Private Communication Channel</Feature>
              <Feature enabled>1 week/agent avg. delivery time</Feature>
              <Feature enabled>Continuous Optimization and Support</Feature>
              <Feature enabled={true}>Multiple AI agent projects simultaneously</Feature>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                Book Your AI Consultation
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-gray-800/50 backdrop-blur border-gray-700">
            <CardHeader className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                <Buildings className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-medium">ENTERPRISE</h3>
              <div className="text-3xl font-bold">Custom Pricing</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Feature enabled>Strategic roadmap development</Feature>
              <Feature enabled>Custom AI agent development</Feature>
              <Feature enabled>Dedicated Project Manager</Feature>
              <Feature enabled>Private Communication Channel</Feature>
              <Feature enabled>1 week/agent avg. delivery time</Feature>
              <Feature enabled>Continuous Optimization and Support</Feature>
              <Feature enabled>Multiple AI agent projects simultaneously</Feature>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                Get Quote
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Pause or cancel anytime
        </p>
      </div>
    </div>
  )
}

const Feature = ({ children, enabled = true }: { children: React.ReactNode; enabled?: boolean }) => (
  <div className={`flex items-center ${enabled ? 'text-white' : 'text-gray-500 line-through'}`}>
    <div className="w-1.5 h-1.5 rounded-full mr-2 bg-current" />
    {children}
  </div>
)
