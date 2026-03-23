import { FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

export default function SideBar() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaBehance />, url: "https://behance.net" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
  ];

  return (
    <div className="social-sidebar">
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
  );
}