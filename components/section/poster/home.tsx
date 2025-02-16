import Link from "next/link"
import Image from "next/image"

export default function PosterHome() {
  return (
    <section className="bg-[#0A0B1A] min-h-screen py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-gray-400 uppercase tracking-wider text-sm">CASE STUDIES</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">AI Agents in Action</h2>
        </div>

        <div className="relative mt-16">
          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Elladin Card */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 backdrop-blur-sm">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4aOnHVb46OVIXPpzlRkIqpbxUFon9F.png"
                  alt="Autonomous Business"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="text-yellow-500 text-sm font-medium">ECOMMERCE</span>
                <h3 className="text-white text-2xl font-bold">
                  Elladin: Creating the World's First Fully Automated Business
                </h3>
                <p className="text-gray-400">
                  The client aimed to create the first fully automated business, focusing on generating, marketing...
                </p>
                <Link href="#" className="inline-flex items-center text-white hover:text-yellow-500 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Unit Test Card */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 backdrop-blur-sm mt-12 md:mt-24">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4aOnHVb46OVIXPpzlRkIqpbxUFon9F.png"
                  alt="Unit Testing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="text-yellow-500 text-sm font-medium">DEVELOPMENT</span>
                <h3 className="text-white text-2xl font-bold">Automating Unit Test Generation with AI Agents</h3>
                <p className="text-gray-400">
                  The client is a development agency based in Mexico. Agency AI acted as a subcontractor to develop
                  AI...
                </p>
                <Link href="#" className="inline-flex items-center text-white hover:text-yellow-500 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller Cards */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="relative w-full h-full">
              {/* Analytics Card */}
              <div className="absolute left-0 top-1/4 w-48 h-48 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg p-4 backdrop-blur-sm transform -rotate-12">
                <h4 className="text-white text-sm font-medium">AI Agents for Data Driven Analysis</h4>
                <span className="text-gray-400 text-xs">ANALYTICS</span>
              </div>

              {/* Newsletter Card */}
              <div className="absolute right-1/4 bottom-0 w-48 h-48 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg p-4 backdrop-blur-sm transform rotate-6">
                <h4 className="text-white text-sm font-medium">AI Agents for Newsletter Creation</h4>
                <span className="text-gray-400 text-xs">DEVELOPMENT</span>
              </div>

              {/* Ecommerce Card */}
              <div className="absolute right-0 top-1/3 w-48 h-48 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-lg p-4 backdrop-blur-sm transform rotate-12">
                <h4 className="text-white text-sm font-medium">Product Listings with AI Agents for Ecommerce</h4>
                <span className="text-gray-400 text-xs">ECOMMERCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 text-right">
          <Link href="#" className="inline-flex items-center text-white hover:text-yellow-500 transition-colors">
            View All
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

