import { AnimateOnScroll } from "@/components/global/AnimateOnScroll"
import { HomeSection } from "@/components/section/home/home"
import PosterHome from "@/components/section/poster/home"
import { PurchaseHome } from "@/components/section/pourchase/home"
import { QuestionsHome } from "@/components/section/questions/home"
import { ReferencesHome } from "@/components/section/references/home"
import { RoadmapHome } from "@/components/section/roadmap/home"
import { ServicesHome } from "@/components/section/services/home"
import { TasksHome } from "@/components/section/tasks/home"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AnimateOnScroll animation="animate__fadeIn">
        <HomeSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate__fadeInUp">
        <ServicesHome />
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate__fadeInUp">
        <TasksHome />
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate__fadeInUp">
        <RoadmapHome />
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate__fadeInUp">
        <PurchaseHome />
      </AnimateOnScroll>
      <AnimateOnScroll animation="animate__fadeInUp">
        <PosterHome />
      </AnimateOnScroll>
      {/* 
      <AnimateOnScroll animation="animate__fadeInUp">
        <ReferencesHome />
      </AnimateOnScroll>*/}
      <AnimateOnScroll animation="animate__fadeInUp">
        <QuestionsHome />
      </AnimateOnScroll>
    </div>
  )
}

