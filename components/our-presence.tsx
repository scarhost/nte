import { Flower2, Landmark, Building } from 'lucide-react'

const locations = [
  { country: "India", icon: Flower2 },
  { country: "USA", icon: Landmark },
  { country: "Dubai", icon: Building },
]

export default function OurPresence() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Presence</h2>
      </div>
      <div className="flex flex-row justify-center items-center space-x-12">
        {locations.map((location, index) => (
          <div key={location.country} className="text-center flex flex-col items-center">
            <location.icon className="w-16 h-16 mb-4 text-primary" />
            <h3 className="text-4xl font-bold">{location.country}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

