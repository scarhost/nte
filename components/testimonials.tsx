import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content: "Switching to solar with NovaTrail Energy was the best decision we've made. Our energy bills have significantly decreased, and we love knowing we're doing our part for the environment.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content: "The team at NovaTrail Energy made the transition to solar power seamless for our company. Their expertise and professionalism are unmatched. Highly recommended!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Farmer",
    content: "NovaTrail's solar irrigation system has revolutionized our farm. We've seen increased crop yields and reduced operating costs. It's a game-changer for agricultural sustainability.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
        <p className="mt-4 text-xl text-muted-foreground">Hear from our satisfied customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="text-center">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto object-cover"
                />
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

