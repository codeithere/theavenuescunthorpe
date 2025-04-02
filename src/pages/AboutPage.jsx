
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"

export function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">
              Providing dignified, supportive housing solutions in partnership with local authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                At The Avenue Scunthorpe, we understand the critical importance of providing safe, 
                dignified temporary accommodation. Our commitment goes beyond just providing a place 
                to stay – we create supportive environments that help individuals and families 
                during transitional periods.
              </p>
              <p className="text-gray-700 mb-4">
                With years of experience in emergency housing and support for vulnerable individuals, 
                our team brings professional expertise and compassionate service to every aspect of 
                our operations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img 
                className="w-full h-full object-cover"
                alt="Professional accommodation management team"
               src="https://images.unsplash.com/photo-1569083676317-dafd0fc965f7" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Professional Excellence",
    description: "We maintain the highest standards in property management and service delivery, ensuring quality accommodation for all residents.",
  },
  {
    title: "Compassionate Support",
    description: "Our approach combines professional service with understanding and support for individuals during challenging transitions.",
  },
  {
    title: "Partnership Focus",
    description: "We work closely with local authorities to provide effective, responsive housing solutions that meet community needs.",
  },
]
