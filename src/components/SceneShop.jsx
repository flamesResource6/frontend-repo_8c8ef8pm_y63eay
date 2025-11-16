import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Aether Low", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop", price: "$220" },
  { id: 2, name: "Vanta Mid", img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop", price: "$260" },
  { id: 3, name: "Nimbus Pro", img: "https://images.unsplash.com/photo-1542291026-0d6d5d31b3a0?q=80&w=1200&auto=format&fit=crop", price: "$280" },
  { id: 4, name: "Spectre Knit", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop", price: "$240" },
];

const EASE = [0.16, 1, 0.3, 1];

export default function SceneShop() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#2a2a2a] to-[#383e4e]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <div className="mb-10">
          <h3 className="text-4xl font-semibold tracking-[-0.02em] text-white">Shop Preview</h3>
          <p className="mt-2 text-white/70">Minimal cards with gentle depth and glassy surfaces.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-3 flex items-center justify-between text-white">
                <span className="text-sm">{p.name}</span>
                <span className="text-white/70">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
