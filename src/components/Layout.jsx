import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import SideBar  from "./sideBar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      <main>{children}</main>
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("about")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <span onClick={() => navigate("/")}>JANA MARKOVIKJ</span>

      <nav className="nav">
        <span onClick={() => navigate("/works")}>WORKS</span>
        <span onClick={goToAbout}>ABOUT</span>
        <span>CONTACT</span>
      </nav>
    </header>
  );
}