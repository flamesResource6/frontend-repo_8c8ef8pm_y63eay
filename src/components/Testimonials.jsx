import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Amelia Hart",
    location: "London, UK",
    text: "Every detail was flawless. The Maldives trip felt like a dream we never had to wake from.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Noah Kim",
    location: "Seoul, KR",
    text: "Concierge support was instant and thoughtful. Paris was beyond romantic.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sofia Mendes",
    location: "Lisbon, PT",
    text: "The alpine cabin was storybook-perfect. Couldn’t stop taking photos.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Ethan Brown",
    location: "Austin, US",
    text: "Effortless planning. We just showed up and had the time of our lives.",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Maya Patel",
    location: "Mumbai, IN",
    text: "From flights to hidden gems, everything was curated to our taste.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
  },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (dir) => {
    const next = Math.max(0, Math.min(testimonials.length - 1, index + dir));
    setIndex(next);
    const el = containerRef.current?.querySelectorAll('[data-card]')[next];
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: luxuryEase }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900"
          >
            What Our Travelers Love About Us.
          </motion.h3>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Previous" onClick={() => scrollTo(-1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowLeft className="h-5 w-5 text-gray-800" />
            </button>
            <button aria-label="Next" onClick={() => scrollTo(1)} className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowRight className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              data-card
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: luxuryEase, delay: i * 0.06 }}
              whileHover={{ y: -3, boxShadow: "0 10px 24px rgba(0,0,0,0.08)" }}
              className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <motion.img
                  src={t.avatar}
                  className="h-10 w-10 rounded-full object-cover"
                  alt={t.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: luxuryEase }}
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
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
