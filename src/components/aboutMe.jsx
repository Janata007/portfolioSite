import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div>
    <section className="about-me" id="about">
      <div className="about-copy">
        <h2 className="about-kicker">ABOUT ME</h2>
        <p>
          Hello! Am currently working as a QA Engineer with focus on automation testing
          on a project in the insurance sector. I have a strong background in
          testing strategy and implementation.
        </p>
        <p>
          Outside that field, I looove digital and traditional art and
          have several projects done including illustrating and writing
          a comic (can view for free here!).
        </p>
      </div>

      <motion.div
        className="about-image-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/images/1000033271.jpg" alt="Jana Markovikj" />
      </motion.div>
    </section>
    <section className="about-me" id="about">
          <motion.div
        className="about-image-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/images/flowerhead11.jpg" alt="Jana Markovikj" />
      </motion.div>

      <div className="about-copy">
        <h2 className="about-kicker">MY ART</h2>
        <p>
          Okay so, this here is Flowerhead, and is one of the characters
          I've designed. My main focus is that and creating stories around
          these characters.
        </p>
        <p>
          I friggin love manga and anime, so of course am inspired by that style.
          Please take a look around my site and feel free to contact me on instagram
          or facebook! 
        </p>
      </div>
    </section>
    </div>
  );
}
