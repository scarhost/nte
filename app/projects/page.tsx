import Projects from "@/components/projects"
import MenuBar from "@/components/menu-bar"
import Footer from "@/components/footer"
import { Metadata } from "next"
import LoadingAnimation from "@/components/loading-animation"

export const metadata: Metadata = {
  title: "Our Projects | NovaTrail Energy",
  description: "Explore our solar energy projects and success stories at NovaTrail Energy.",
}

export default function ProjectsPage() {
  return (
    <>
      <MenuBar />
      <LoadingAnimation />
      <Projects />
      <Footer />
    </>
  )
}

