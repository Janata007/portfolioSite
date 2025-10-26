import { color, motion } from "motion/react";
import { useRef, useState } from "react";
import { ball, innerBall, innerBall2 } from "../../PropahUtils/constants";
import "../../mystyle.css";

const variants = {
  initial: {
    y: 500,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const ArtPage = ({ section }) => {
  const ref = useRef();

  const { title, subtitle } = section;
  return (
    <div className="mainView" id={title}>
      <h1>{title}</h1>
      <section id={title}>
        <div className="content">
          <div className="leftest-div">
            <motion.div whileHover={{ scale: 1.1 }}>
              <h2>Projects:</h2>
              <ul className="pagedList">
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h2>Tools:</h2>
              <ul className="pagedList">
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </motion.div>
          </div>
          <div className="centered-div">
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              style={ball}
            >
              <motion.div className="textContainer" variants={variants}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  style={innerBall}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.5,
                      },
                    }}
                    style={innerBall2}
                  >
                    <motion.div className="item" variants={variants}>
                      <h2>Art</h2>
                      <span>{subtitle}</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="rightest-div">
          <motion.div whileHover={{ scale: 1.1 }}>
            <h2>Projects:</h2>
            <ul className="pagedList">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <h2>Tools:</h2>
            <ul className="pagedList">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArtPage;
