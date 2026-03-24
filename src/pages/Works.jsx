import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Character design - Bird dude",
    image: "/images/bird_dude.jpg",
    description: "Design based on retro coloring and style.",
  },
  {
    id: 2,
    title: "Comic cover - Nazazan",
    image: "/images/newCover.jpg",
    description: "Cover design for my comic project. Says 'Nazazan' in macedonian",
  },
  {
    id: 3,
    title: "Character design - Sunhead",
    image: "/images/sunheadchar1.jpg",
    description: "Sunhead, one of my original characters. Inspired by egyptian art and mythology.",
  },
  {
    id: 4,
    title: "Poster design - FEIT",
    image: "/images/feit_brucoska_poster.jpg",
    description: "Poster design for a college event. Used the university mascot as the main visual element.",
  },
];
export default function Works() {
  return (
    <div className="works-page">
      <motion.h1
        className="works-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        SOME OF MY WORK
      </motion.h1>

      <section className="grid works-grid">
        {projects.map((p) => (
          <motion.div
            className="project works-project"
            key={p.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={p.image} alt={p.title} />
              <div className="project-overlay">
                <p>{p.description}</p>
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>
          </motion.div>
        ))}
      </section>
    </div>
  );
}