import LoadingAnimation from "@/components/loading-animation"
import MenuBar from "@/components/menu-bar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import OurTopManagement from "@/components/our-top-management"
import OurPresence from "@/components/our-presence"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import FadeInSection from "@/components/fade-in-section"

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <MenuBar />
      <Hero />
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <OurTopManagement />
      </FadeInSection>
      <FadeInSection>
        <OurPresence />
      </FadeInSection>
      <FadeInSection>
        <Testimonials />
      </FadeInSection>
      <Footer />
    </>
  )
}

