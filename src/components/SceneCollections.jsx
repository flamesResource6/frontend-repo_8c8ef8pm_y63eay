import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const cards = [
  { id: 1, title: "Aether Low", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop" },
  { id: 2, title: "Vanta Mid", img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1400&auto=format&fit=crop" },
  { id: 3, title: "Nimbus Pro", img: "https://images.unsplash.com/photo-1542291026-0d6d5d31b3a0?q=80&w=1400&auto=format&fit=crop" },
];

export default function SceneCollections() {
  const { scrollYProgress } = useScroll();
  const depth = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), { stiffness: 60, damping: 20 });

  return (
    <section className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#2a2a2a] to-[#383e4e]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.id}
              style={{ y: depth }}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, ease: EASE, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={c.img} alt={c.title} className="h-full w-full object-cover opacity-95 transition will-change-transform group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex items-center justify-between text-white">
                <span className="text-lg font-medium tracking-wide">{c.title}</span>
                <button className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">View</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
