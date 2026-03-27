import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ComicPage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Array of all comic pages based on the actual files in comicPages folder
    const pageList = [
      "page00.webp", "page01.webp", "page02.webp", "page03.webp", "page04.webp",
      "page05.webp", "page06.webp", "page07.webp", "page08.webp", "page09.webp",
      "page10.webp", "page11.webp", "page12.webp", "page13.webp", "page14.webp",
      "page17.webp", "page18.webp", "page19.webp", "page20.webp", "page21.webp",
      "page22.webp", "page23.webp", "page24.webp", "page25.webp", "page26.webp",
      "page27.webp", "page28.webp", "page29.webp", "page30.webp", "page31.webp",
      "page32.webp", "page33.webp", "page34.webp", "page35.webp", "page36.webp",
      "page37.webp", "page38.webp", "page39_40.webp", "page41.webp", "page42.webp",
      "page43.webp", "page44.webp", "page45.webp", "page46.webp", "page47.webp",
      "page48.webp", "page49.webp", "page50.webp", "page51.webp", "page52.webp",
      "page53.webp", "page54.webp", "page55.webp", "page56.webp", "page57.webp",
      "page58.webp", "page59.webp", "page60.webp", "page61.webp", "page62.webp",
      "page63.webp", "page64.webp", "page65_66.webp", "page67.webp", "page68.webp",
      "page69.webp", "page70.webp", "page71.webp", "page72.webp", "page73_74.webp",
      "page75.webp", "page76.webp", "page77.webp", "page78.webp", "page79_80.webp",
      "page81.webp", "page82.webp", "page83.webp", "page84.webp", "page85_86.webp",
      "page87.webp", "page88.webp"
    ];
    setPages(pageList);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="comic-page">
      <motion.h1
        className="comic-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        NAZAZAN
      </motion.h1>

      <div className="comic-pages-container">
        {pages.map((page, index) => (
          <motion.img
            key={index}
            src={`/comicPages/${page}`}
            alt={`Comic page ${page}`}
            className="comic-page-image"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          />
        ))}
      </div>

      <button 
        className="back-to-top-btn" 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </section>
  );
}
