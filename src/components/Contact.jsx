import { useEffect, useRef } from "react";

const contacts = [
  { href: "mailto:dileep.thetchina@gmail.com", icon: "✉️", label: "dileep.thetchina@gmail.com" },
  { href: "tel:+916383848738", icon: "📞", label: "+91 63838 48738" },
  { href: "https://linkedin.com/in/dileep2202", icon: "💼", label: "LinkedIn", target: "_blank" },
  { href: "https://github.com/dileept2202", icon: "🐙", label: "GitHub", target: "_blank" },
  { href: "#", icon: "📍", label: "Madurai, Tamil Nadu" },
];

export default function Contact() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div className="section-label"><span></span></div>
      <h2 className="section-title" style={{ textAlign: "center" }}>
        Let's <span>Connect</span>
      </h2>
      <p style={{ textAlign: "center", color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
        I'm actively looking for opportunities. Whether you have a question, a project, or just want to say hi — my inbox is always open!
      </p>
      <div className="contact-grid reveal" ref={ref}>
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contact-item"
            target={c.target || undefined}
            rel={c.target ? "noreferrer" : undefined}
          >
            <span style={{ fontSize: "1.1rem" }}>{c.icon}</span>
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}
