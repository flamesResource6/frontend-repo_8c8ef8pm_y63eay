import { Menu, Search, Globe, User } from "lucide-react";
import { motion } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-black/5 px-4 sm:px-6 py-3"
        >
          {/* Left: Logo + Menu */}
          <div className="flex items-center gap-6">
            <a href="#home" onClick={handleScroll('#home')} className="text-2xl font-semibold tracking-tight text-gray-900">Tourist</a>
            <nav className="hidden md:flex items-center gap-5 text-gray-700">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Packages", href: "#packages" },
                { label: "FAQ", href: "#faq" },
                { label: "Booking", href: "#booking" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleScroll(item.href)}
                  className="text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Search + Language + Button */}
          <div className="hidden md:flex items-center gap-3">
            <form className="relative" onSubmit={(e)=>{e.preventDefault();}}>
              <input
                placeholder="Search places"
                className="w-48 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm pr-9 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-sm text-gray-700 hover:bg-white transition" aria-label="Change language">
              <Globe className="h-4 w-4" /> EN
            </button>
            <a href="#contact" onClick={handleScroll('#contact')} className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-black transition">
              <User className="h-4 w-4" /> Contact
            </a>
          </div>

          {/* Mobile */}
          <a href="#packages" onClick={handleScroll('#packages')} className="md:hidden inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm">
            <Menu className="h-4 w-4" /> Menu
          </a>
        </motion.div>
      </div>
    </div>
  );
}
