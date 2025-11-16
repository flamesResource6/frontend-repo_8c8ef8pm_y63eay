import { Menu, Search, Globe, User, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-md shadow-sm ring-1 ring-black/5 px-4 sm:px-6 py-3">
          {/* Left: Logo + Menu */}
          <div className="flex items-center gap-6">
            <div className="text-2xl font-semibold tracking-tight text-gray-900">Tourist</div>
            <nav className="hidden md:flex items-center gap-5 text-gray-700">
              {[
                "Home",
                "Destination",
                "Gallery",
                "Package",
                "About Us",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Search + Language + Button */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                placeholder="Search places"
                className="w-48 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm pr-9 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-sm text-gray-700 hover:bg-white transition">
              <Globe className="h-4 w-4" /> EN
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-black transition">
              <User className="h-4 w-4" /> Login / Contact
            </button>
          </div>

          {/* Mobile */}
          <button className="md:hidden inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-sm">
            <Menu className="h-4 w-4" /> Menu
          </button>
        </div>
      </div>
    </div>
  );
}
