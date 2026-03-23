import { motion } from "framer-motion";

export default function ProjectPage() {
  return (
    <div className="pt-32 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl mb-10"
      >
        River Sea
      </motion.h1>

      <div className="space-y-10">
        {["/p1.jpg", "/p2.jpg", "/p3.jpg"].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="w-full object-cover"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>

      <p className="mt-16 max-w-xl text-sm leading-relaxed">
        Personal portfolio site showcasing my work and projects.
      </p>
    </div>
  );
}