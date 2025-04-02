
import React from "react"
import { motion } from "framer-motion"

export function TeamPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl mb-8">
              Dedicated professionals committed to providing exceptional temporary accommodation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Meet Our Experts</h2>
            <p className="text-gray-700">
              With decades of collective experience in temporary accommodation management, 
              our team brings together expertise in property management, support services, 
              and community care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover"
                    alt={member.name}
                   src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{member.name}</h3>
                <p className="text-secondary-foreground font-medium mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </motion.div>
            ))}
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

const team = [
  {
    name: "Sarah Thompson",
    role: "Operations Director",
    description: "Over 15 years of experience in temporary accommodation management and local authority partnerships.",
    imageDescription: "Professional headshot of Sarah Thompson, Operations Director"
  },
  {
    name: "James Wilson",
    role: "Property Manager",
    description: "Specialist in property maintenance and emergency housing solutions with 10+ years experience.",
    imageDescription: "Professional headshot of James Wilson, Property Manager"
  },
  {
    name: "Emily Chen",
    role: "Support Services Manager",
    description: "Dedicated to ensuring high-quality support services and resident welfare for over 8 years.",
    imageDescription: "Professional headshot of Emily Chen, Support Services Manager"
  }
]

const values = [
  {
    title: "Excellence",
    description: "We maintain the highest standards in all aspects of our service delivery.",
  },
  {
    title: "Compassion",
    description: "Understanding and supporting individuals through challenging transitions.",
  },
  {
    title: "Integrity",
    description: "Operating with transparency and honesty in all our partnerships.",
  }
]
