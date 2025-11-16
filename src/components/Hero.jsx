import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop", // green mountains with road
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop",
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const el = document.querySelector('#packages');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax controls
  const { scrollYProgress } = useScroll();
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yFog = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yRoad = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const ySmoothMountains = useSpring(yMountains, { stiffness: 60, damping: 20, mass: 1 });
  const ySmoothFog = useSpring(yFog, { stiffness: 60, damping: 22, mass: 1 });
  const ySmoothRoad = useSpring(yRoad, { stiffness: 60, damping: 18, mass: 1 });

  return (
    <section className="pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl"
        >
          {/* Background base */}
          <motion.img
            src={images[0]}
            alt="Cinematic mountains"
            className="h-[520px] w-full object-cover opacity-80"
            style={{ y: ySmoothMountains }}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: luxuryEase }}
          />

          {/* Fog overlay (soft parallax) */}
          <motion.div
            aria-hidden
            style={{ y: ySmoothFog }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-white/10 mix-blend-overlay"
          />

          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          {/* Winding road highlight (soft parallax) */}
          <motion.div
            style={{ y: ySmoothRoad }}
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent"
          />

          {/* Content */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: luxuryEase, delay: 0.1 }}
                className="text-white/80 text-sm sm:text-base mb-3"
              >
                Curated journeys, effortless planning
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: luxuryEase, delay: 0.2 }}
                className="max-w-xl text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
              >
                Pack Your Bags, Let’s Go Somewhere Amazing
              </motion.h1>

              {/* Subscribe */}
              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: luxuryEase, delay: 0.35 }}
                className="mt-6 flex w-full max-w-md items-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/5"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
                  aria-label="Email address"
                />
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="m-1 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-black transition"
                >
                  Subscribe <ChevronRight className="h-4 w-4" />
                </motion.button>
              </motion.form>
            </div>

            {/* Floating slider */}
            <div className="hidden lg:block w-[40%] relative">
              <div className="absolute right-6 top-6 flex flex-col gap-4">
                {images.slice(1).map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: luxuryEase, delay: i * 0.12 }}
                    className="overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm shadow-lg"
                  >
                    <motion.img src={src} alt="Gallery" className="h-36 w-64 object-cover" initial={{ scale: 1.02 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: luxuryEase }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
