
import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { ServicesPage } from "./pages/ServicesPage"
import { TeamPage } from "./pages/TeamPage"
import { LocationsPage } from "./pages/LocationsPage"
import { ContactPage } from "./pages/ContactPage"

export function App() {
  return (
    <div className="min-h-screen bg-background font-beausite flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
