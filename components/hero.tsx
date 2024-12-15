"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  useEffect(() => {
    const title = document.getElementById("hero-title")
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
    <section className="py-16 px-4 md:px-6 lg:px-8 w-full mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-green-100 opacity-50" />
      <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="text-center max-w-3xl mx-auto relative">
        <div className="mb-6">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            Powering Tomorrow with Solar Energy Today
          </h1>
          <Sun className="w-16 h-16 text-yellow-500 mx-auto" />
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          NovaTrail Energy is leading the way in sustainable solar solutions. We provide innovative solar technology for homes
          and businesses, making clean energy accessible to all.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

