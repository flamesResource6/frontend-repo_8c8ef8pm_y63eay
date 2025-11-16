import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function SceneComfort() {
  const { scrollYProgress } = useScroll();
  const z = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const layers = [
    { name: "Outsole", color: "#0f172a" },
    { name: "Cushion Foam", color: "#1e293b" },
    { name: "Stability Plate", color: "#334155" },
    { name: "Upper", color: "#475569" },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#2a2a2a] to-[#383e4e]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-semibold tracking-[-0.02em] text-white">Comfort & Technology</h2>
            <p className="mt-4 max-w-md text-white/70">Layers engineered to move with you—each component tuned for support, rebound, and breathability.</p>
          </div>
          <div className="relative">
            {layers.map((l, i) => (
              <motion.div
                key={l.name}
                style={{ zIndex: 10 - i }}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
                className="relative mb-6 h-20 w-[44vw] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(135deg, ${l.color}, transparent)` }} />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/85">{l.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
