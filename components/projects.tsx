import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Commercial Solar Installation",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60",
    description: "Large scale solar installation for commercial buildings",
    link: "/projects/commercial-solar-installation"
  },
  {
    title: "Residential Solar Project",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&auto=format&fit=crop&q=60",
    description: "Complete home solar power solution",
    link: "/projects/residential-solar-project"
  },
  {
    title: "Agricultural Solar Systems",
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&auto=format&fit=crop&q=60",
    description: "Solar-powered irrigation systems for farms",
    link: "/projects/agricultural-solar-systems"
  },
  {
    title: "Municipal Street Lighting",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&auto=format&fit=crop&q=60",
    description: "City-wide solar street lighting project",
    link: "/projects/municipal-street-lighting"
  },
]

export default function Projects() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
        <p className="mt-4 text-xl text-muted-foreground">Featured solar energy installations and success stories</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <Link href={project.link} passHref>
                  <Button className="w-full">Learn More</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

