import { motion } from "motion/react";
import { ball } from "../../PropahUtils/constants";

const ArtPage = ({ section }) => {
  const { title, subtitle } = section;
    return (
      <section id={title}>
        <div className="content">
          <h1>{title}</h1>
             <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity:1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    style={ball}
                  />
          <p>{subtitle}</p>
        </div>
      </section>
    );
  }

export default ArtPage;
