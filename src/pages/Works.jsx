import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "Character design - Bird dude",
    subTitle: "2024",
    image: "/images/bird_dude.webp",
    description: "Design based on retro coloring and style.",
  },
  {
    id: 2,
    title: "Comic cover - Nazazan",
    subTitle: "2025",
    image: "/images/newCover.webp",
    description:
      "Cover design for my comic project. Says 'Nazazan' in macedonian",
  },
  {
    id: 3,
    title: "Character design - Sunhead",
    subTitle: "2025",
    image: "/images/sunhead_ver1.webp",
    description:
      "Sunhead, one of my original characters. Inspired by egyptian art and mythology",
  },
   {
    id: 6,
    title: "Character design - Sunhead",
    subTitle: "2025",
    image: "/images/sunheadchar1.webp",
    description:
      "Sunhead, one of my original characters. Inspired by egyptian art and mythology",
  },
  {
    id: 4,
    title: "Poster design - FEIT",
    subTitle: "2024",
    image: "/images/feit_brucoska_poster.webp",
    description:
      "Poster design for a college event. Used the university mascot as the main visual element",
  },
    {
    id: 6,
    title: "T-shirt design",
    subTitle: "2025",
    image: "/images/feit_dizajn1.webp",
    width: 3360,
    height: 4578,
    fileSizeBytes: 1968961,
    description:
      "Design for a t-shirt logo for college event",
  },
  {
    id: 5,
    title: "Short comic",
    subTitle: "2024",
    image: "/images/roboComic.webp",
    width: 9932,
    height: 3508,
    fileSizeBytes: 13393135,
    description:
      "Short comic for a festival. Initially started from a character design concept",
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
      <motion.p
        className="works-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        Below there is a selection of some of my work from recent years. If you hover/click 
        on the images, you can see a short description of each piece
      </motion.p>
       <motion.p
        className="works-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        For more of my work, please check out my <i>Instagram</i> or <i>Facebook</i>
      </motion.p>
      <motion.div
        className="works-signature-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img src="/images/potpis_white.png" alt="Jana signature" className="works-signature" />
      </motion.div>

      <section className="grid works-grid">
        {projects.map((p) => {
          const isWide = p.width / p.height >= 1.2;
          const isLargeFile = p.fileSizeBytes > 1024 * 1024;

          return (
          <motion.div
            className={`project works-project ${isWide ? "works-project-wide" : ""} ${isLargeFile ? "works-project-large" : ""}`}
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
            <h4 className="project-subtitle">{p.subTitle}</h4>
          </motion.div>
        )})}
      </section>
    </div>
  );
}
