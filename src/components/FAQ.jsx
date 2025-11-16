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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5"
            >
              <div className="text-xs text-gray-500">{f.n}</div>
              <h4 className="mt-2 text-lg font-semibold text-gray-900">{f.q}</h4>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-gray-700 hover:text-gray-900">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
