
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { useToast } from "../components/ui/use-toast"

export function ContactPage() {
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We will be in touch shortly.",
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8">
              Get in touch to discuss your accommodation needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@theavenuescunthorpe.co.uk
                </p>
                <p className="text-gray-700">
                  <strong>Telephone:</strong> 01234 567890
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">We're Available For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    <span>Accommodation needs consultation</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    <span>Partnership arrangements</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    <span>Property inspections</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    <span>Support services information</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-primary">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Organisation</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telephone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Enquiry Details</label>
                  <textarea
                    className="w-full p-3 border rounded-md"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
