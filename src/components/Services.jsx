import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const staggerParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, when: "beforeChildren" },
  },
};

const leftCard = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: luxuryEase } },
};

const rightCard = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: luxuryEase, delay: 0.05 } },
};

export default function Services() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left Card */}
          <motion.div
            variants={leftCard}
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
            <motion.a
              whileHover={{ y: -2 }}
              href="#packages"
              className="mt-6 inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-black"
              onClick={(e)=>{e.preventDefault(); document.querySelector('#packages')?.scrollIntoView({behavior:'smooth'});}}
            >
              Explore packages
            </motion.a>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            variants={rightCard}
            className="relative overflow-hidden rounded-3xl shadow-xl"
          >
            <motion.img
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: luxuryEase }}
              src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1274&auto=format&fit=crop"
              alt="Tropical resort entrance"
              className="h-[520px] w-full object-cover"
            />
            {/* Bottom overlay */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}
              className="absolute inset-x-6 bottom-6"
            >
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
