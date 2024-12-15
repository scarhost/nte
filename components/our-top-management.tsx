import Image from "next/image"

const teamMembers = [
  {
    name: "Rajiv Kumar",
    role: "CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rajiv_kumar-KnUZ1NdcApfq8bw6k5IjikUMGfEQtj.png"
  },
  {
    name: "Jane Doe",
    role: "COO",
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Emily Brown",
    role: "CFO",
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "Michael Johnson",
    role: "CMO",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
]

export default function OurTopManagement() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-16">Our Top Management</h2>
      <div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">{member.name}</h4>
              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

