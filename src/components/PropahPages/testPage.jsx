import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [active, setActive] = useState(null);

  const items = [
    { id: 1, title: "Project One", desc: "Short description" },
    { id: 2, title: "Project Two", desc: "Short description" },
    { id: 3, title: "Project Three", desc: "Short description" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-400 max-w-xl"
        >
          Frontend Developer crafting clean and interactive experiences.
        </motion.p>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActive(item.id === active ? null : item.id)}
              whileHover={{ scale: 1.05, rotate: 1 }}
              animate={{
                borderRadius: active === item.id ? "30%" : "1rem",
                backgroundColor: active === item.id ? "#1f2937" : "#111827",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 cursor-pointer shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-400 mb-6">your@email.com</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black rounded-full font-medium"
        >
          Say Hello
        </motion.button>
      </section>
    </div>
  );
}
