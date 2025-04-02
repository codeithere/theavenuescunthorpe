
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              Comprehensive accommodation solutions tailored to meet diverse needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={service.title} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`order-${index % 2 === 0 ? '1' : '2'}`}
              >
                <h2 className="text-3xl font-bold mb-6 text-primary">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`order-${index % 2 === 0 ? '2' : '1'} relative h-[400px] rounded-lg overflow-hidden`}
              >
                <img 
                  className="w-full h-full object-cover"
                  alt={service.imageAlt}
                 src="https://images.unsplash.com/photo-1690721606848-ac5bdcde45ea" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Ready to Learn More?</h2>
          <Button 
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
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
    description: "Immediate, responsive accommodation solutions for urgent housing needs, available 24/7 with comprehensive support services.",
    features: [
      "24/7 emergency response team",
      "Rapid placement capability",
      "Fully furnished accommodations",
      "On-site support staff",
      "Secure access systems"
    ],
    imageAlt: "Emergency accommodation facility",
    imageDescription: "A well-maintained emergency accommodation building with welcoming entrance"
  },
  {
    title: "Temporary Housing",
    description: "Flexible accommodation options for longer-term stays, providing stability and support during transitional periods.",
    features: [
      "Flexible length of stay",
      "Professional property management",
      "Regular maintenance services",
      "Communal facilities",
      "Support staff coordination"
    ],
    imageAlt: "Temporary housing complex",
    imageDescription: "Modern temporary housing complex with well-maintained grounds"
  },
  {
    title: "Family Accommodation",
    description: "Purpose-designed facilities catering specifically to families, ensuring comfort and security for all family members.",
    features: [
      "Family-sized units",
      "Child-friendly environments",
      "Communal play areas",
      "Additional storage space",
      "Family support services"
    ],
    imageAlt: "Family accommodation unit",
    imageDescription: "Welcoming family accommodation with playground and green spaces"
  }
]
