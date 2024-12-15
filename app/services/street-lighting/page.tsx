"use client"

import { useEffect } from "react"
import Image from "next/image"
import MenuBar from "@/components/menu-bar"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/loading-animation"

export default function StreetLightingPage() {
  useEffect(() => {
    // Typewriter effect for the title
    const title = document.getElementById("title")
    if (title) {
      const text = title.innerText
      title.innerText = ""
      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          title.innerHTML += text.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }
      typeWriter()
    }
  }, [])

  return (
    <>
      <MenuBar />
      <LoadingAnimation />
      <div className="min-h-screen bg-white">
        <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 id="title" className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Solar-Powered Street Lighting
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our solar-powered street lighting solutions provide eco-friendly, cost-efficient, and reliable illumination for urban and rural areas alike. Powered by clean energy, these lights ensure a sustainable future while reducing dependency on traditional electricity grids.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Reduced energy costs</li>
                <li>Sustainability and eco-friendliness</li>
                <li>Easy maintenance and long lifespan</li>
                <li>Improved safety and visibility in public spaces</li>
              </ul>
            </div>
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&auto=format&fit=crop&q=60"
                alt="Solar-powered street light"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Applications</h2>
            <p className="text-xl text-muted-foreground">
              Our solar street lighting solutions are perfect for:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Residential areas and neighborhoods</li>
              <li>Highways and major roads</li>
              <li>Parks and public spaces</li>
              <li>Parking lots and commercial areas</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Technical Details</h2>
            <p className="text-xl text-muted-foreground">
              Our solar street lights are designed for durability and efficiency:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>High-efficiency solar panels</li>
              <li>Long-lasting LED bulbs</li>
              <li>Weather-resistant construction</li>
              <li>Smart controls for optimal performance</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Team Behind the Service</h2>
            <p className="text-xl text-muted-foreground">
              Our team of engineers and renewable energy experts are committed to delivering high-quality solutions tailored to your needs. With years of experience in solar technology, we ensure that every project is executed with precision and care.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-6">
              With our proven track record and dedication to excellence, you can trust us to deliver top-notch solar energy solutions for all your street lighting needs.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

