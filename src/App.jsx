import React from "react";
import Page from "./components/PropahMain/page";
import ArtPage from "./components/PropahArtPage/artPage";
import "./mystyle.css";
import { sections } from "./PropahUtils/constants";

const menus = ["home", "about", "projects", "art", "contact"];

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
            if (section.title === "art") {
              return <ArtPage section={section} key={index} />;
            }
            return <Page section={section} key={index} />;
          })}
        </div>
      </main>
    </>
  );
};

export default App;
