import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Footer() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: luxuryEase }}
      className="mt-16 bg-gray-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h5 className="text-sm font-semibold text-white/80">Explore</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="#packages" onClick={scrollTo('#packages')}>Destinations</a></li>
            <li><a href="#services" onClick={scrollTo('#services')}>Experiences</a></li>
            <li><a href="#testimonials" onClick={scrollTo('#testimonials')}>Stories</a></li>
            <li><a href="#gallery" onClick={(e)=>{e.preventDefault();}}>Community</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Support</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="#faq" onClick={scrollTo('#faq')}>Help Center</a></li>
            <li><a href="#faq" onClick={scrollTo('#faq')}>FAQ</a></li>
            <li><a href="#contact" onClick={scrollTo('#contact')}>Contact</a></li>
            <li><a href="#accessibility" onClick={(e)=>{e.preventDefault();}}>Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Special Offers</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="#packages" onClick={scrollTo('#packages')}>Seasonal Deals</a></li>
            <li><a href="#packages" onClick={scrollTo('#packages')}>Honeymoons</a></li>
            <li><a href="#packages" onClick={scrollTo('#packages')}>Family Trips</a></li>
            <li><a href="#packages" onClick={scrollTo('#packages')}>Last Minute</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-white/80">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@tourist.co</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
            <li>Worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-white/70">
            <a aria-label="Facebook" href="#" onClick={(e)=>e.preventDefault()}><Facebook className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" onClick={(e)=>e.preventDefault()}><Instagram className="h-5 w-5" /></a>
            <a aria-label="Twitter" href="#" onClick={(e)=>e.preventDefault()}><Twitter className="h-5 w-5" /></a>
            <a aria-label="YouTube" href="#" onClick={(e)=>e.preventDefault()}><Youtube className="h-5 w-5" /></a>
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} Tourist. All rights reserved.</div>
          <div className="text-xs text-white/60 flex items-center gap-4">
            <a href="#privacy" onClick={(e)=>e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e)=>e.preventDefault()}>Terms</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
