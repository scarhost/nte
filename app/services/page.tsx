import Services from "@/components/services"
import MenuBar from "@/components/menu-bar"
import Footer from "@/components/footer"
import { Metadata } from "next"
import LoadingAnimation from "@/components/loading-animation"

export const metadata: Metadata = {
  title: "Our Services | NovaTrail Energy",
  description: "Discover our comprehensive solar energy solutions at NovaTrail Energy.",
}

export default function ServicesPage() {
  return (
    <>
      <MenuBar />
      <LoadingAnimation />
      <Services />
      <Footer />
    </>
  )
}

