import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h5 className="text-sm font-semibold text-white/80">Explore</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Destinations</li>
            <li>Experiences</li>
            <li>Stories</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Support</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Special Offers</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Seasonal Deals</li>
            <li>Honeymoons</li>
            <li>Family Trips</li>
            <li>Last Minute</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>hello@tourist.co</li>
            <li>+1 (555) 123-4567</li>
            <li>Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white/70">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Youtube className="h-5 w-5" />
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} Tourist. All rights reserved.</div>
          <div className="text-xs text-white/60 flex items-center gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
