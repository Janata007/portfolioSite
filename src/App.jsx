import Page from "./components/PropahMain/homePage";
import ArtPage from "./components/PropahPages/artPage";
import "./mystyle.css";
import { sections, ball } from "./PropahUtils/constants";
import ContactPage from "./components/PropahPages/contactPage";
import ProjectsPage from "./components/PropahPages/projectsPage";

const App = () => {
  return (
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
  );
};

export default App;
