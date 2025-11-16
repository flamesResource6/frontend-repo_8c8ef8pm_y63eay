import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Atmosphere from "./Atmosphere";

const EASE = [0.16, 1, 0.3, 1];

export default function ShoeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 60, damping: 20, mass: 1 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.96]), { stiffness: 60, damping: 18 });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.4]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.2]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#383e4e] via-[#2a2a2a] to-[#2a2a2a]" />
      <Atmosphere density={60} tint="#9fb3c8" opacity={0.12} />

      {/* Centered shoe with soft rotation and glow */}
      <motion.div style={{ y, scale }} className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ rotateZ: 0 }}
          className="relative"
        >
          <div className="absolute -inset-24 rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.10), transparent)", opacity: glowOpacity }} />
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
            alt="Premium Shoe"
            className="relative z-10 h-[46vh] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            style={{ filter: "contrast(1.05) saturate(1.05)" }}
          />
          <div className="absolute inset-x-0 -bottom-10 h-14 rounded-full blur-2xl" style={{ background: "radial-gradient(closest-side, rgba(0,0,0,0.35), transparent)", opacity: shadowOpacity }} />
        </motion.div>
      </motion.div>

      {/* Typography */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
          className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-white"
        >
          Elevate Your Movement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          className="mt-4 max-w-xl text-lg text-white/70"
        >
          Quiet performance. Crafted comfort. Minimal design for maximum focus.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-3"
        >
          <button className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md transition">
            <span className="relative z-10">Shop the Collection</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </button>
          <button className="group relative overflow-hidden rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md transition">
            <span className="relative z-10">Learn More</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
