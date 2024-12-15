import MenuBar from "@/components/menu-bar"
import Footer from "@/components/footer"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import LoadingAnimation from "@/components/loading-animation"

export const metadata: Metadata = {
  title: "Contact Us | NovaTrail Energy",
  description: "Get in touch with NovaTrail Energy for all your solar energy needs.",
}

export default function ContactPage() {
  return (
    <>
      <MenuBar />
      <LoadingAnimation />
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Offices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">India</h3>
                <p>NovaTrail Energy<br />Bangalore, India - 560001</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">USA</h3>
                <p>NovaTrail Energy<br />1234 Solar Lane<br />San Francisco, CA, 94107<br />USA</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Dubai</h3>
                <p>NovaTrail Energy<br />Downtown Dubai<br />UAE - PO Box 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Contact Information</h3>
                <p>Email: info@novatrail.com<br />Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

