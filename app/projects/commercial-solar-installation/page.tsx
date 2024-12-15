"use client"

import { useEffect } from "react"
import Image from "next/image"
import MenuBar from "@/components/menu-bar"
import Footer from "@/components/footer"
import { Building2, Sun, Battery, BarChart3 } from 'lucide-react'
import LoadingAnimation from "@/components/loading-animation"
export default function CommercialSolarInstallationPage() {
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
            Commercial Solar Installation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Our commercial solar installations provide sustainable, cost-effective energy solutions for businesses of all sizes. By harnessing the power of the sun, we help companies reduce their carbon footprint and energy costs while increasing their energy independence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-yellow-500" />
                  <span>Significant reduction in energy costs</span>
                </li>
                <li className="flex items-center">
                  <Sun className="w-6 h-6 mr-2 text-yellow-500" />
                  <span>Clean, renewable energy source</span>
                </li>
                <li className="flex items-center">
                  <Battery className="w-6 h-6 mr-2 text-yellow-500" />
                  <span>Energy independence and reliability</span>
                </li>
                <li className="flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-yellow-500" />
                  <span>Enhanced property value</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60"
                alt="Commercial Solar Installation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground mb-4">
              We take a comprehensive approach to commercial solar installations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li>Thorough site assessment and energy audit</li>
              <li>Custom system design to maximize efficiency</li>
              <li>High-quality equipment and expert installation</li>
              <li>Ongoing monitoring and maintenance services</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground mb-4">
              Our commercial solar installations feature:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xl">
              <li>High-efficiency solar panels</li>
              <li>Advanced inverter technology</li>
              <li>Robust mounting systems</li>
              <li>Smart monitoring and control systems</li>
            </ul>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Our team of experienced engineers, designers, and installers are committed to delivering top-quality commercial solar solutions. With years of industry experience, we ensure that every project is executed with precision and care, tailored to meet your specific energy needs and goals.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-6">
              With our proven track record and dedication to excellence, you can trust NovaTrail Energy to deliver a superior commercial solar installation that will power your business into a sustainable future.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

