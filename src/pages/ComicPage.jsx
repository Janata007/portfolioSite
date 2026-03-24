import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ComicPage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Array of all comic pages based on the actual files in comicPages folder
    const pageList = [
      "page00.jpg", "page01.jpg", "page02.jpg", "page03.jpg", "page04.jpg",
      "page05.jpg", "page06.jpg", "page07.jpg", "page08.jpg", "page09.jpg",
      "page10.jpg", "page11.jpg", "page12.jpg", "page13.jpg", "page14.jpg",
      "page17.jpg", "page18.jpg", "page19.jpg", "page20.jpg", "page21.jpg",
      "page22.jpg", "page23.jpg", "page24.jpg", "page25.jpg", "page26.jpg",
      "page27.jpg", "page28.jpg", "page29.jpg", "page30.jpg", "page31.jpg",
      "page32.jpg", "page33.jpg", "page34.jpg", "page35.jpg", "page36.jpg",
      "page37.jpg", "page38.jpg", "page39_40.jpg", "page41.jpg", "page42.jpg",
      "page43.jpg", "page44.jpg", "page45.jpg", "page46.jpg", "page47.jpg",
      "page48.jpg", "page49.jpg", "page50.jpg", "page51.jpg", "page52.jpg",
      "page53.jpg", "page54.jpg", "page55.jpg", "page56.jpg", "page57.jpg",
      "page58.jpg", "page59.jpg", "page60.jpg", "page61.jpg", "page62.jpg",
      "page63.jpg", "page64.jpg", "page65_66.jpg", "page67.jpg", "page68.jpg",
      "page69.jpg", "page70.jpg", "page71.jpg", "page72.jpg", "page73_74.jpg",
      "page75.jpg", "page76.jpg", "page77.jpg", "page78.jpg", "page79_80.jpg",
      "page81.jpg", "page82.jpg", "page83.jpg", "page84.jpg", "page85_86.jpg",
      "page87.jpg", "page88.jpg"
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
