import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function SceneContact() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#383e4e] via-[#2a2a2a] to-[#2a2a2a]" />
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE }}
          className="text-4xl font-semibold tracking-[-0.02em] text-white"
        >
          Stay in the loop
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
          className="mt-4 max-w-xl text-white/70"
        >
          Clean, quiet updates. No noise. Sign up to know when new releases drop.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.2 }}
          className="mt-8 flex w-full max-w-md items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none" placeholder="Enter your email" />
          <button className="rounded-full bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/15 transition">Subscribe</button>
        </motion.form>
      </div>
    </section>
  );
}
