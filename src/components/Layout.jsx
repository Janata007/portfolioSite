import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideBar  from "./sideBar";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/emjey_arts/" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jana-markovikj-b5b5341a6/" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/jana.markovic.397" },
  { icon: <FaMailBulk />, url: "mailto:jana.markovic001@gmail.com" },
];

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`header ${isHidden ? "header-hidden" : ""}`}>
      <span className="header-title clickable" onClick={() => navigate("/")}>JANA MARKOVIKJ</span>

      <nav className="nav">
        <span className="clickable" onClick={() => navigate("/works")}>WORKS</span>
        <span className="clickable" onClick={goToAbout}>ABOUT</span>
        <span>COMIC</span>
      </nav>
    </header>
  );
}

function Footer() {
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
    <footer className="footer">
      <span className="clickable" onClick={() => navigate("/")}>JANA MARKOVIKJ</span>
      <nav className="footer-nav">
        <span className="clickable" onClick={() => navigate("/works")}>WORKS</span>
        <span className="clickable" onClick={goToAbout}>ABOUT</span>
        <span>COMIC</span>
      </nav>
      <div className="footer-social">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}