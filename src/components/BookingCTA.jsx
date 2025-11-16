import { motion, useScroll, useTransform } from "framer-motion";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function BookingCTA() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -40]);

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y }} className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
          <motion.img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1974&auto=format&fit=crop"
            alt="Sunset ocean cliffs"
            className="h-72 sm:h-96 w-full object-cover"
            initial={{ scale: 1.04, opacity: 0.95 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: luxuryEase }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: luxuryEase }}
                className="text-white text-3xl sm:text-4xl font-semibold"
              >
                Why Wait for Tomorrow? Book Today!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: luxuryEase, delay: 0.05 }}
                className="mt-3 text-white/80 max-w-2xl mx-auto"
              >
                Limited-time offers on handpicked escapes. Reserve your spot and let the anticipation begin.
              </motion.p>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={handleClick}
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow hover:bg-gray-100"
              >
                Let’s Go…
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
