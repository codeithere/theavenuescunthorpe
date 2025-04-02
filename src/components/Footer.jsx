
import React from "react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: info@theavenuescunthorpe.co.uk</p>
            <p>Tel: 01234 567890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>Scunthorpe - The Avenue</li>
              <li>Scunthorpe - The Clamart Hotel</li>
              <li>Huddersfield - The Newsome Lodge</li>
              <li>Greater London - Multiple Locations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary">Our Services</Link></li>
              <li><Link to="/team" className="hover:text-secondary">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-secondary">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} The Avenue Scunthorpe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
