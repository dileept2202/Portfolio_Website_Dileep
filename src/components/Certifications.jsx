import { useEffect, useRef } from "react";

const certs = [
  {
    img: "/certificate1.jpg",
    alt: "MongoDB Associate Developer Certification",
    issuer: "MongoDB",
    name: "MongoDB Certified Associate Developer",
    desc: "Earned the internationally recognized MongoDB Associate Developer Certification, demonstrating proficiency in database design, CRUD operations, indexing, aggregation pipelines, and application development using MongoDB.",
  },
  {
    img: "/certificate2.jpg",
    alt: "NPTEL Responsible and Safe AI Certification",
    issuer: "NPTEL",
    name: "Responsible and Safe AI",
    desc: "Successfully completed the NPTEL certification program on Responsible and Safe AI, gaining knowledge of ethical AI practices, fairness, transparency, privacy, risk assessment, and responsible deployment of artificial intelligence systems.",
  },
  {
    img: "/certificate3.jpg",
    alt: "NCC B Certificate",
    issuer: "National Cadet Corps (NCC)",
    name: "NCC 'B' Certificate – Grade A",
    desc: "Successfully completed the NCC 'B' Certificate examination and secured Grade 'A', demonstrating excellence in leadership, discipline, teamwork, drill training, and national service activities.",
  },
  {
    img: "/certificate4.jpg",
    alt: "Generative AI Consortium Internship",
    issuer: "Generative AI Consortium",
    name: "Generative AI Internship Program",
    desc: "Completed a 6-week internship program focused on Generative AI technologies, gaining practical exposure to AI tools, prompt engineering, large language models, and real-world AI applications.",
  },
  {
    img: "/certificate5.jpg",
    alt: "CodSoft JavaScript Internship",
    issuer: "CodSoft",
    name: "JavaScript Development Internship",
    desc: "Successfully completed a 4-week JavaScript internship program at CodSoft, strengthening skills in web development, DOM manipulation, problem-solving, and interactive application development.",
  },
  {
    img: "/certificate6.jpg",
    alt: "Megadish Antenna & Satellite System Project",
    issuer: "Megadish Antenna & Satellite System",
    name: "E-Commerce & Digital Sales Project",
    desc: "Contributed to the development and management of an e-commerce and consultancy website for Megadish Antenna & Satellite System, supporting online product sales, digital operations, and revenue generation of over ₹10,000 alongside team members.",
  },
];

export default function Certifications() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleImgError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <section id="certifications">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">My <span>Certificates</span></h2>
      <div className="certs-grid reveal" ref={ref}>
        {certs.map((c) => (
          <div className="cert-card" key={c.name}>
            <div className="cert-img-wrap">
              <img src={c.img} alt={c.alt} onError={handleImgError} />
              <div className="cert-img-placeholder" style={{ display: "none" }}>
                <span style={{ fontSize: "2.5rem" }}>🏅</span>
                Certificate Image
              </div>
            </div>
            <div className="cert-body">
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-desc">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
