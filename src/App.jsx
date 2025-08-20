import React from 'react'
import Page from './components/PropahMain/page';
import "./mystyle.css";

const menus = ["home", "about", "projects", "art", "contact"];
const sections = [
  {
    title: "home",
    subtitle: "Home section "
  },
  {
    title: "about",
    subtitle: "About me section"
  },
  {
    title: "projects",
    subtitle: "My projects section"
  },
  {
    title: "art",
    subtitle: "My art section"
  },
  {
    title: "contact",
    subtitle: "Contact me section"
  }
];

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
          {sections.map((section, index) => (
            <Page {...{ section }} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App