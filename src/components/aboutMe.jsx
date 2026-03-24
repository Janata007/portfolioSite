import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div>
    <section className="about-me" id="about">
      <div className="about-copy">
        <h2 className="about-kicker">ABOUT ME</h2>
        <p>Hello!</p>
        <p>
          Am currently working as a <b>QA Engineer</b> with focus on automation testing
          on a project in the insurance sector. <i>(for more details on that reach me on LinkedIn/mail)</i>
        </p>
        <p>
          Outside that field, I looOove digital and traditional art and
          have several projects done including illustrating and writing
          a comic <i>(and you can read it here!)</i>
        </p>
        <p>Feel free to click around view my stuff</p>
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
        <img src="/images/flowerhead11.jpg" alt="Flowerhead character" />
      </motion.div>

      <div className="about-copy">
        <h2 className="about-kicker">MY ART</h2>
        <p>
          This here is <b>Flowerhead</b> (also shown on top), and is one of the characters
          I've designed. My main focus is that and creating stories around
          these characters.
        </p>
        <p>
          For any inquiries regarding commissions, please reach out to me on Instagram or Facebook
        </p>
      </div>
    </section>
    </div>
  );
}
