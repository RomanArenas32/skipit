
import { cn } from "@/lib/utils"

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "AI Readiness Consultation",
    description:
      "We start by understanding your vision. Our initial consultation aligns our AI solutions with your business goals.",
  },
  {
    number: 2,
    title: "Transparent Progress Tracking",
    description:
      "Your dedicated customer portal allows for real-time progress tracking and feedback, ensuring our solutions evolve with your needs.",
  },
  {
    number: 3,
    title: "Seamless Integration",
    description:
      "We'll embed your new AI agents into your business, ensuring they deliver real value from day one.",
  },
  {
    number: 4,
    title: "Ongoing Support",
    description:
      "We'll keep adding more agents, refining and expanding their capabilities to keep your company ahead of the game.",
  },
]

export const RoadmapHome = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0a0b1e] px-4 py-20">
      <div className="container max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-bold text-[#ffd700] sm:text-5xl">
          How It Works: Our Process
        </h2>
        <p className="mb-16 text-gray-400">
          A Proven Framework for Transforming Your Business with Custom AI Agent Solutions.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 h-full w-px bg-gray-800" />

          {/* Steps */}
          <div className="relative space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative flex gap-8",
                  index % 2 === 0 ? "flex-row text-right" : "flex-row-reverse text-left"
                )}
              >
                {/* Content */}
                <div className="flex-1 pt-3">
                  <div
                    className={cn(
                      "inline-flex items-center gap-2",
                      index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    <span className="text-sm font-medium uppercase tracking-wider text-[#ffd700]">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-400">{step.description}</p>
                </div>

                {/* Center dot */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#ffd700] bg-[#0a0b1e]" />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
