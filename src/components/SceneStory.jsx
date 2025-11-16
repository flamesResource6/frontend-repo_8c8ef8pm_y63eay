import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function SceneStory() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#2a2a2a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#383e4e] via-[#2a2a2a] to-[#2a2a2a]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(1200px 600px at 50% 30%, rgba(255,255,255,0.06), rgba(0,0,0,0))" }} />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE }}
          className="text-5xl font-semibold tracking-[-0.02em] text-white"
        >
          A Quiet Story of Movement
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          We design footwear that disappears—leaving only you and your rhythm. Materials elevated, lines reduced, performance amplified.
        </motion.p>
      </div>
    </section>
  );
}
