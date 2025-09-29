import React from "react";
import Page from "./components/PropahMain/page";
import ArtPage from "./components/PropahPages/artPage";
import "./mystyle.css";
import { sections } from "./PropahUtils/constants";
import ContactPage from "./components/PropahPages/contactPage";
import ProjectsPage from "./components/PropahPages/projectsPage";

const menus = ["home", "projects", "art", "contact"];

const App = () => {
  return (
    <>
      <header>
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
