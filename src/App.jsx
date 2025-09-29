import React from "react";
import { motion } from "motion/react";
import Page from "./components/PropahMain/page";
import ArtPage from "./components/PropahPages/artPage";
import "./mystyle.css";
import { sections, ball } from "./PropahUtils/constants";
import ContactPage from "./components/PropahPages/contactPage";
import ProjectsPage from "./components/PropahPages/projectsPage";

const menus = ["home", "projects", "art", "contact"];
const App = () => {
  return (
    <>
      <header>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          style={ball}
        />
        <nav>
          <ul>
            {menus.map((menu, index) => (
              <li key={index}>
                <a href={`#${menu}`}>{menu}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div>
          {sections.map((section, index) => {
            switch (section.title) {
              case "art":
                return <ArtPage section={section} key={index} />;
              case "contact":
                return <ContactPage section={section} key={index} />;
              case "projects":
                return <ProjectsPage section={section} key={index} />;
              default:
                return <Page section={section} key={index} />;
            }
          })}
        </div>
      </main>
    </>
  );
};

export default App;
