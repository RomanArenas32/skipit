"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "Who is this service ideally for?",
    answer:
      "Our services are tailored for business owners managing teams of 5 or more. At this scale, operational complexities emerge, making it an opportune time to implement AI solutions for streamlining processes, enhancing efficiency, and scaling with ease. Whether you're at the helm of a small team or a larger enterprise, leveraging AI can significantly propel your business forward.",
  },
  {
    question: "Why wouldn't I just develop AI solutions in-house?",
    answer:
      "Building AI solutions in-house requires significant expertise, time, and resources. Our platform provides ready-to-use, tested solutions that can be implemented quickly and cost-effectively.",
  },
  {
    question: "Is there a limit to how many agents I can request?",
    answer:
      "We offer flexible scaling options based on your needs. Contact us to discuss your specific requirements and we'll find the right solution for your business.",
  },
  {
    question: "What if I don't know what AI agents I need?",
    answer:
      "Our team of experts will work with you to assess your business needs and recommend the most suitable AI solutions for your specific use case.",
  },
  {
    question: "How long does it take to deliver my agents?",
    answer:
      "Delivery times vary based on complexity, but we typically aim to deliver initial implementations within 2-4 weeks.",
  },
  {
    question: "Is there a test, demo, or trial before committing?",
    answer:
      "Yes, we offer demonstrations and proof-of-concept trials to help you evaluate the solution before making a commitment.",
  },
  {
    question: "What technology stack do you use?",
    answer:
      "We use cutting-edge AI and machine learning technologies, including state-of-the-art language models and cloud infrastructure.",
  },
  {
    question: "Do you support Open Source models?",
    answer:
      "Yes, we support both proprietary and open-source models, depending on your specific needs and requirements.",
  },
  {
    question: "What if my agents are underperforming?",
    answer:
      "We provide ongoing monitoring and optimization services to ensure your AI agents maintain peak performance.",
  },
  {
    question: "What if I only have a single request?",
    answer: "We accommodate both small and large-scale implementations. Contact us to discuss your specific needs.",
  },
  {
    question: "What services are included in the subscription?",
    answer: "Our subscription includes implementation, maintenance, monitoring, updates, and technical support.",
  },
  {
    question: "Is there any development work you don't cover?",
    answer:
      "While we cover most AI-related development, some specialized integrations may require additional assessment.",
  },
  {
    question: "Who will own the codebase and IP rights?",
    answer: "You retain full ownership of any custom solutions developed for your business.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive technical support, including 24/7 monitoring and regular maintenance.",
  },
  {
    question: "Do you offer partnerships, reselling, or affiliate opportunities?",
    answer: "Yes, we offer various partnership programs. Contact us to learn more about collaboration opportunities.",
  },
]

export const QuestionsHome = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90 text-left text-base sm:text-lg font-medium py-6">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

