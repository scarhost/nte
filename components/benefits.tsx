import { Banknote, Leaf, Sun, Wrench } from 'lucide-react'

const benefits = [
  {
    title: "Cost Savings",
    description: "Reduce your electricity bills and enjoy long-term savings.",
    icon: Banknote,
  },
  {
    title: "Eco-Friendly",
    description: "Minimize your carbon footprint and contribute to a cleaner environment.",
    icon: Leaf,
  },
  {
    title: "Renewable and Sustainable",
    description: "Harness an unlimited source of clean energy from the sun.",
    icon: Sun,
  },
  {
    title: "Low Maintenance",
    description: "Solar panels require minimal upkeep, saving you time and money.",
    icon: Wrench,
  },
]

export default function Benefits() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Solar Energy?</h2>
        <p className="mt-4 text-xl text-muted-foreground">Discover the advantages of switching to solar power</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="text-center">
            <benefit.icon className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

