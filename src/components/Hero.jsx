import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop", // mountains road (legacy)
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1974&auto=format&fit=crop", // coastal / beach
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop", // desert dusk / canyon
];

// Two premium themes mapped to the right-side cards
const themes = [
  {
    id: "coastal",
    label: "Coastal Escape",
    image: images[1],
    // Warm-cool coastal tone: slightly cooler blues with crisp contrast
    filter: "brightness(0.95) contrast(1.06) saturate(1.08) hue-rotate(-6deg)",
    // Overlay gradient intensity (Tailwind classes must remain static)
    overlay: {
      gradientClass: "from-blue-900/60 via-indigo-700/20 to-transparent",
      vignetteClass: "from-black/30",
    },
    text: {
      dropShadowClass: "drop-shadow-[0_10px_32px_rgba(0,0,0,0.55)]",
      subtitleOpacity: "text-white/85",
    },
    glow: "rgba(112, 200, 255, 0.35)",
  },
  {
    id: "desert",
    label: "Desert Dusk",
    image: images[2],
    // Warmer amber/rose temperature for an evening mood
    filter: "brightness(0.9) contrast(1.08) saturate(1.12) hue-rotate(10deg)",
    overlay: {
      gradientClass: "from-amber-900/60 via-rose-700/20 to-transparent",
      vignetteClass: "from-black/35",
    },
    text: {
      dropShadowClass: "drop-shadow-[0_12px_36px_rgba(0,0,0,0.6)]",
      subtitleOpacity: "text-white/90",
    },
    glow: "rgba(255, 190, 120, 0.38)",
  },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [active, setActive] = useState(0); // 0: coastal, 1: desert

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

  const theme = themes[active];

  return (
    <section className="pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl"
        >
          {/* Background with cinematic crossfade + soft zoom on theme change */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={theme.id}
                src={theme.image}
                alt={theme.label}
                className="h-[520px] w-full object-cover"
                style={{ y: ySmoothMountains, filter: theme.filter, opacity: 0.9 }}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: luxuryEase }}
              />
            </AnimatePresence>

            {/* Fog overlay (soft parallax) */}
            <motion.div
              aria-hidden
              style={{ y: ySmoothFog }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-white/10 mix-blend-overlay"
            />

            {/* Readability gradient tuned per theme */}
            <div className={`absolute inset-0 bg-gradient-to-r ${theme.overlay.gradientClass}`} />

            {/* Vignette at bottom (subtle depth) */}
            <motion.div
              style={{ y: ySmoothRoad }}
              className={`absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t ${theme.overlay.vignetteClass} to-transparent`}
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex">
            {/* Left: Headline & subscribe */}
            <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: luxuryEase, delay: 0.1 }}
                className={`text-sm sm:text-base mb-3 text-white/80`}
              >
                Curated journeys, effortless planning
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: luxuryEase, delay: 0.2 }}
                className={`max-w-xl text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight ${theme.text.dropShadowClass}`}
             >
                Pack Your Bags, Let’s Go Somewhere Amazing
              </motion.h1>

              {/* Subscribe */}
              <motion.form
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: luxuryEase, delay: 0.35 }}
                className="mt-6 flex w-full max-w-md items-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/5 backdrop-blur-sm"
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

            {/* Right: Theme cards */}
            <div className="hidden lg:block w-[40%] relative">
              <div className="absolute right-6 top-6 flex flex-col gap-4">
                {themes.map((t, i) => {
                  const isActive = i === active;
                  return (
                    <motion.button
                      key={t.id}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      initial={{ x: 40, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.8, ease: luxuryEase, delay: i * 0.12 }}
                      className={`group overflow-hidden rounded-2xl ring-1 backdrop-blur-sm shadow-lg ${
                        isActive ? "ring-white/80" : "ring-white/20"
                      }`}
                      style={{
                        boxShadow: isActive
                          ? `0 0 0 1px rgba(255,255,255,0.3), 0 10px 24px rgba(0,0,0,0.25), 0 0 24px ${t.glow}`
                          : "0 10px 24px rgba(0,0,0,0.18)",
                      }}
                    >
                      <div className="relative">
                        <img src={t.image} alt={t.label} className="h-36 w-64 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm">
                            {t.label}
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
