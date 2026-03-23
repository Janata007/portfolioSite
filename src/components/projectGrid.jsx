import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Example 1", image: "/images/1000033271.jpg" },
  { id: 2, title: "Example 2", image: "/images/1000033271.jpg" },
  { id: 3, title: "Example 3", image: "/images/1000033271.jpg" },
  
];

export default function ProjectGrid() {
  return (
    <section className="grid">
      {projects.map((p) => (
        <motion.div
          className="project"
          key={p.id}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="project-image">
            <img src={p.image} alt={p.title} />
          </div>

          <h3 className="project-title">{p.title}</h3>
        </motion.div>
      ))}
    </section>
  );
}