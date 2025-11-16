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

export default function Packages() {
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
            <button className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowLeft className="h-5 w-5 text-gray-800" />
            </button>
            <button className="rounded-full p-2 bg-white shadow ring-1 ring-black/5">
              <ArrowRight className="h-5 w-5 text-gray-800" />
            </button>
          </div>
        </div>

        <div className="grid gap-6">
          {packages.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-64 sm:h-80 w-full object-cover"
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
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/90 text-gray-800 text-xs px-3 py-1 ring-1 ring-black/5"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
