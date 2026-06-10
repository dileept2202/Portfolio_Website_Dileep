import { useState, useEffect } from "react";

const links = ["about", "experience", "skills", "projects", "certifications", "achievements", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const onScroll = () => {
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <div className="nav-logo"><img src="/profile.jpg" alt="Dileep T" /></div>
      <ul className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l}`}
              className={active === l ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
