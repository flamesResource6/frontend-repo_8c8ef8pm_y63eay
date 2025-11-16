import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975940460-86e0e4f5e8a8?q=80&w=1400&auto=format&fit=crop",
];

const EASE = [0.16, 1, 0.3, 1];

export default function SceneCraftsmanship() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#383e4e] via-[#2a2a2a] to-[#2a2a2a]" />
      <div className="relative z-10 flex h-full items-center">
        <motion.div style={{ x }} className="flex w-[300vw] items-center gap-8 px-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              className="relative h-[70vh] w-[90vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img src={src} alt="Craft detail" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white/85">
                <p className="max-w-md text-sm">Precision stitching, breathable meshes, and refined leathers—engineered for quiet performance.</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
