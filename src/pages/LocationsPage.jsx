
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { useNavigate } from "react-router-dom"

export function LocationsPage() {
  const navigate = useNavigate()

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
            <p className="text-xl mb-8">
              Quality accommodation across key locations in the UK
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img 
                    className="w-full h-full object-cover"
                    alt={location.name}
                   src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">{location.name}</h2>
                  <p className="text-gray-700 mb-6">{location.description}</p>
                  <h3 className="font-bold mb-2 text-primary">Facilities:</h3>
                  <ul className="space-y-2 mb-6">
                    {location.facilities.map((facility, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-primary mr-2">•</span>
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    onClick={() => navigate("/contact")}
                  >
                    Arrange a Visit
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Want to Learn More About Our Locations?
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

const locations = [
  {
    name: "Scunthorpe - The Avenue",
    description: "Our flagship location offering comprehensive temporary accommodation services with excellent transport links and local amenities.",
    facilities: [
      "24-hour onsite personnel",
      "Fully furnished accommodation",
      "Secure access system",
      "Communal facilities",
      "Regular maintenance"
    ],
    imageDescription: "The Avenue Scunthorpe main building with well-maintained exterior"
  },
  {
    name: "Scunthorpe - The Clamart Hotel",
    description: "Centrally located accommodation providing easy access to local services and support facilities.",
    facilities: [
      "24/7 reception desk",
      "Furnished rooms",
      "Security system",
      "Shared kitchen facilities",
      "Weekly cleaning service"
    ],
    imageDescription: "The Clamart Hotel building with its distinctive facade"
  },
  {
    name: "Huddersfield - The Newsome Lodge",
    description: "Purpose-designed accommodation facility with a focus on family-friendly environments and support services.",
    facilities: [
      "Family units available",
      "On-site support staff",
      "Secure playground",
      "Communal areas",
      "Regular maintenance"
    ],
    imageDescription: "The Newsome Lodge with its family-friendly facilities"
  },
  {
    name: "Greater London Locations",
    description: "Multiple locations across Greater London providing accessible temporary accommodation options.",
    facilities: [
      "Various accommodation types",
      "24-hour support",
      "Transport links",
      "Flexible stay options",
      "Local authority liaison"
    ],
    imageDescription: "One of our Greater London accommodation buildings"
  }
]
