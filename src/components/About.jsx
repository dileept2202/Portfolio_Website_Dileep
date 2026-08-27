
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-label">
        <span></span>
      </div>

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-grid reveal" ref={ref}>

        <div className="about-text">

          <p>
            Hello! I'm <strong>Dileep T</strong>, a B.Tech graduate in{" "}
            <strong>Artificial Intelligence &amp; Data Science</strong> from
            Kongu Engineering College, Erode. I am passionate about data
            analytics and using data-driven insights to solve real-world
            business problems.
          </p>

          <p>
            Currently, I am working as a{" "}
            <strong>Data Analyst – Data Quality & Validation (Healthcare Billing) at Viyugaa Technologies</strong>,
            where I work with healthcare billing data, validate claim forms,
            resolve data discrepancies, and maintain high accuracy while
            meeting productivity targets.
          </p>

          <p>
            Previously, I worked as a{" "}
            <strong>Business Analyst Intern – Team Lead at UptoSkills</strong>,
            where I led a team of 20 members and worked on data analysis,
            business research, Power BI dashboards, Excel reports, Python,
            and SQL to support data-driven decision-making.
          </p>

          <p>
            My interests include{" "}
            <strong>
              Data Analytics, Business Intelligence, Machine Learning,
              and Data Visualization
            </strong>
            . I enjoy turning raw data into meaningful insights and building
            practical solutions that connect technology with business needs.
          </p>

          <p>
            Beyond academics and work, my experience as an{" "}
            <strong>NCC Cadet</strong>, along with being awarded{" "}
            <strong>Best in Training</strong> and appointed as{" "}
            <strong>Camp Senior</strong>, has strengthened my leadership,
            discipline, teamwork, communication, and problem-solving skills.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat-card">
            <div className="stat-number">7.95</div>
            <div className="stat-label">CGPA – B.Tech AI&amp;DS</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">20</div>
            <div className="stat-label">Team Members Led</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">98%+</div>
            <div className="stat-label">Billing Accuracy</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">93.16%</div>
            <div className="stat-label">HSC Score</div>
          </div>

        </div>

      </div>
    </section>
  );
}
