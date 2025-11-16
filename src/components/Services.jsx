import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

export default function Services() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-8 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Travel Made Simple, Adventures Made Amazing
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From seamless planning to immersive experiences, we craft journeys
            that feel effortless and unforgettable. Sit back while we handle the
            details.
          </p>
          <a href="#packages" className="mt-6 inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black" onClick={(e)=>{e.preventDefault(); document.querySelector('#packages')?.scrollIntoView({behavior:'smooth'});}}>
            Explore packages
          </a>
        </motion.div>

        {/* Right Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1274&auto=format&fit=crop"
            alt="Tropical resort entrance"
            className="h-[520px] w-full object-cover"
          />
          {/* Bottom overlay */}
          <div className="absolute inset-x-6 bottom-6">
            <div className="flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gray-900 p-2 text-white">
                  <HeartHandshake className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Stress? Not on Our Watch!
                  </p>
                  <p className="text-xs text-gray-500">Concierge service, 24/7</p>
                </div>
              </div>
              <a href="#contact" onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Learn More →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
