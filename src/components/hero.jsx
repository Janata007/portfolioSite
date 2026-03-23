import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <motion.img
        src="./images/1000033271.jpg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Personal Portfolio Site
      </motion.div>
    </section>
  );
}