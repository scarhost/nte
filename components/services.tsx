import { Lightbulb, Droplet, Sprout, Home } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Street Lighting",
    description: "Illuminate public spaces efficiently with our solar-powered street lighting solutions.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&auto=format&fit=crop&q=60",
    link: "/services/street-lighting"
  },
  {
    title: "Solar Water Pumping for Household",
    description: "Efficient water pumping systems powered by solar energy for residential use.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1562184760-a11b3cf7c169?w=800&auto=format&fit=crop&q=60",
    link: "/services/household-pumping"
  },
  {
    title: "Solar Water Pumping for Irrigation",
    description: "Sustainable irrigation solutions for agriculture using solar-powered pumping systems.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&auto=format&fit=crop&q=60",
    link: "/services/irrigation-pumping"
  },
  {
    title: "Solar Rooftop",
    description: "Transform your roof into a power generator with our solar panel installations.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60",
    link: "/services/solar-rooftop"
  },
]

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mt-4 text-muted-foreground">Discover our comprehensive solar energy solutions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col group hover:shadow-lg transition-shadow">
            <CardHeader>
              <service.icon className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              <div className="aspect-video relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <Link href={service.link} passHref>
                <Button className="w-full mt-auto">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

