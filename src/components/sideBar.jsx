import { FaInstagram, FaBehance, FaLinkedin, FaFacebook, FaVoicemail, FaMailBulk } from "react-icons/fa";

export default function SideBar() {
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/emjey_arts/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jana-markovikj-b5b5341a6/" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/jana.markovic.397" },
    { icon: <FaMailBulk />, url: "mailto:jana.markovic001@gmail.com" },
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