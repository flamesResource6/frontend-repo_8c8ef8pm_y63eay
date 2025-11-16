import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Packages from './components/Packages'
import FAQ from './components/FAQ'
import BookingCTA from './components/BookingCTA'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pb-16">
        {/* Navbar pinned to the top */}
        <Navbar />

        {/* Sections with anchor ids for smooth in-page navigation */}
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="packages">
            <Packages />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="booking">
            <BookingCTA />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          {/* Fallback anchor for contact scrolls (footer contains details) */}
          <div id="contact" />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
