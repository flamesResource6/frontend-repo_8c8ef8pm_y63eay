import { motion } from "framer-motion";

export default function IglooNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.2 }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5"
    >
      <div className="pointer-events-auto text-sm tracking-wide text-white/80">ELEVATE</div>
      <div className="pointer-events-auto flex items-center gap-6 text-xs text-white/60">
        <button className="rounded-full border border-white/10 px-3 py-1.5 backdrop-blur-md hover:bg-white/5 transition">Shop</button>
        <button className="rounded-full border border-white/10 px-3 py-1.5 backdrop-blur-md hover:bg-white/5 transition">About</button>
        <button className="rounded-full border border-white/10 px-3 py-1.5 backdrop-blur-md hover:bg-white/5 transition">Contact</button>
      </div>
    </motion.nav>
  );
}
