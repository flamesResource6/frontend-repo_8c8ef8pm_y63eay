import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const packages = [
  {
    title: "Cozy Cabin by the Mountain Lake",
    label: "Switzerland",
    chips: ["Nature", "Adventure", "Relaxation"],
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Maldives Overwater Villas Escape",
    label: "Maldives",
    chips: ["Luxury", "Relaxation"],
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Paris Romance near the Eiffel",
    label: "France",
    chips: ["Cultural", "Luxury"],
    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1974&auto=format&fit=crop",
  },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Packages() {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (dir) => {
    const next = Math.max(0, Math.min(packages.length - 1, index + dir));
    setIndex(next);
    const el = listRef.current?.children?.[next];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Vacations You’ll Never Stop Talking About.
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Previous" onClick={() => scrollTo(-1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowLeft className="h-5 w-5 text-gray-800" />
            </button>
            <button aria-label="Next" onClick={() => scrollTo(1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowRight className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Cards list */}
        <div ref={listRef} className="grid gap-6 sm:gap-8">
          {packages.map((p, i) => {
            return (
              <motion.a
                href="#booking"
                onClick={(e)=>{e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({behavior:'smooth'});}}
                key={i}
                initial={{ opacity: 0, x: 46, rotateY: 3, scale: 0.95, transformPerspective: 900 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: luxuryEase, delay: i * 0.06 }}
                whileHover={{ y: -2 }}
                className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 block focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="h-64 sm:h-80 w-full object-cover"
                  initial={{ scale: 1.02, opacity: 0.98 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: luxuryEase }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-6 sm:p-10">
                    <div className="rounded-full bg-white/90 text-gray-700 text-xs inline-flex px-3 py-1 ring-1 ring-black/5">
                      {p.label}
                    </div>
                    <h4 className="mt-3 text-white text-2xl sm:text-4xl font-semibold max-w-xl">
                      {p.title}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.chips.map((c, idx) => (
                        <motion.span
                          key={c}
                          initial={{ opacity: 0, scale: 0.9, y: 6 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: luxuryEase, delay: idx * 0.05 + 0.1 }}
                          className="rounded-full bg-white/90 text-gray-800 text-xs px-3 py-1 ring-1 ring-black/5"
                        >
                          {c}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile nav buttons */}
        <div className="mt-6 flex sm:hidden items-center justify-center gap-3">
          <button aria-label="Previous" onClick={() => scrollTo(-1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
            <ArrowLeft className="h-5 w-5 text-gray-800" />
          </button>
          <button aria-label="Next" onClick={() => scrollTo(1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
            <ArrowRight className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
