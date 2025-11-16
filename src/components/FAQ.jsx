import { motion } from "framer-motion";

const faqs = [
  {
    n: "#01",
    q: "How do I customize my itinerary?",
    a: "Tell us your preferences and we’ll tailor each day to match your pace and interests.",
  },
  { n: "#02", q: "Are flights included?", a: "Packages can be booked with or without flights—your choice." },
  { n: "#03", q: "What’s your cancellation policy?", a: "Flexible options with clear timelines for refunds and credits." },
  { n: "#04", q: "Do you offer group discounts?", a: "Yes, special rates for families, friends, and corporate retreats." },
  { n: "#05", q: "Can I book last-minute trips?", a: "Absolutely—our team specializes in fast, seamless arrangements." },
  { n: "#06", q: "Is travel insurance available?", a: "We partner with top providers to keep you protected." },
];

const luxuryEase = [0.16, 1, 0.3, 1];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
          Everything You Need to Know, All in One Place.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: luxuryEase, delay: i * 0.06 }}
              className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5"
            >
              <motion.div
                initial={{ x: -14, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: luxuryEase }}
                className="text-xs text-gray-500"
              >
                {f.n}
              </motion.div>
              <motion.h4
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: luxuryEase, delay: 0.05 }}
                className="mt-2 text-lg font-semibold text-gray-900"
              >
                {f.q}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: luxuryEase, delay: 0.1 }}
                className="mt-2 text-sm text-gray-600"
              >
                {f.a}
              </motion.p>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ x: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: luxuryEase, delay: 0.12 }}
                href="#contact"
                onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}
                className="mt-4 inline-block text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
