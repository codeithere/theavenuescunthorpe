
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  
            className="w-full h-full object-cover opacity-20" 
            alt="Modern accommodation building" src="https://images.unsplash.com/photo-1579895117575-57114c2f208a" />
        </div>
        <motion.div 
          className="container mx-auto px-4 z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Avenue Scunthorpe
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A Different Approach to Temporary Accommodation
          </p>
          <Button 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90"
            onClick={() => navigate("/services")}
          >
            Explore Our Services
          </Button>
        </motion.div>
      </header>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Supporting Local Authorities
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We work closely with local authorities to provide dignified, supportive housing solutions. 
              Our approach combines professional property management with compassionate service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate("/services")}
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Local Authorities Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg"
            >
              <p className="text-xl italic mb-6">
                "The Avenue Scunthorpe has been an invaluable partner in providing high-quality temporary accommodation. Their professional approach and commitment to supporting vulnerable individuals has made a real difference in our community."
              </p>
              <p className="font-bold">
                - Housing Services Manager, Local Authority
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Ready to Discuss Your Accommodation Needs?
          </h2>
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => navigate("/contact")}
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Emergency Accommodation",
    description: "Immediate, responsive accommodation solutions for urgent housing needs, with 24/7 support and rapid placement capabilities.",
  },
  {
    title: "Temporary Housing",
    description: "Flexible accommodation options for longer-term stays with comprehensive support services and professional property management.",
  },
  {
    title: "Family Accommodation",
    description: "Purpose-designed facilities catering specifically to families' needs, ensuring comfort, security, and appropriate amenities.",
  },
]
