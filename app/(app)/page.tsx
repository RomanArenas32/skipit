
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
      <HomeSection />
      <ServicesHome />
      <TasksHome />
      <RoadmapHome />
      <PurchaseHome />
      <PosterHome />
      <ReferencesHome />
      <QuestionsHome />
    </div>
  )
}

