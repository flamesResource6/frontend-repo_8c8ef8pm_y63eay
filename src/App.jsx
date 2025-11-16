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
        <Navbar />
        <Hero />
        <Services />
        <Packages />
        <FAQ />
        <BookingCTA />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default App
