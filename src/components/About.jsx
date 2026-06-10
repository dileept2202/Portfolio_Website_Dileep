import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-grid reveal" ref={ref}>
        <div className="about-text">
  <p>
    Hello! I'm <strong>Dileep T</strong>, a B.Tech graduate in <strong>Artificial Intelligence &amp; Data Science</strong> from Kongu Engineering College, Erode. I am passionate about data analytics and using technology to solve business problems through data-driven insights.
  </p>

  <p>
    Currently, I am working as a <strong>Business Analyst Intern &amp; Team Lead at UptoSkills</strong>, where I lead a team, develop Power BI dashboards, and analyze data using Python, SQL, and Excel to support business decision-making.
  </p>

  <p>
    My interests include <strong>Data Analytics, Business Intelligence, Machine Learning</strong>, and web development. I enjoy building practical solutions that combine data, technology, and business needs.
  </p>

  <p>
    Beyond academics and work, my experience as an <strong>NCC Cadet</strong>, <strong>Best in Training</strong> award recipient, and <strong>Camp Senior</strong> has strengthened my leadership, discipline, and teamwork skills.
  </p>
</div>
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">7.95</div>
            <div className="stat-label">CGPA – B.Tech AI&DS</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Internship</div>
          </div>
        
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">93%</div>
            <div className="stat-label">HSC Score</div>
          </div>
        </div>
      </div>
    </section>
  );
}
