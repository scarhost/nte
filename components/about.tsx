import Image from "next/image"

export default function About() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="text-lg text-muted-foreground">
            At NovaTrail Energy, we're passionate about harnessing the power of the sun to create a
            sustainable future. Solar energy is not just an alternative; it's a necessity in reducing
            our carbon footprint and creating a cleaner world for generations to come.
          </p>
          <p className="text-lg text-muted-foreground">
            Our team of experts is dedicated to providing innovative solar solutions that are
            tailored to your specific needs, whether you're a homeowner, a business, or a large-scale
            industrial operation.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60"
            alt="Solar Farm"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

