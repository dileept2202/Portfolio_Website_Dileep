import { useEffect, useRef } from "react";

export default function Experience() {
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
    <section id="experience">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">Where I've <span>Worked</span></h2>
      <div className="timeline reveal" ref={ref}>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Business Analyst Intern – Team Lead</div>
                <div className="exp-company">UptoSkills</div>
              </div>
              <div className="exp-date">March 2026 – Present</div>
            </div>
            <ul className="exp-list">
              <li>Led and coordinated a cross-functional team of 20 members, managing task delegation, performance monitoring, and project execution to ensure the successful and timely achievement of organizational objectives.</li>
              <li>Conducted comprehensive SWOT analyses and market research to assess business performance, identify growth opportunities, mitigate risks, and support data-driven strategic planning.</li>
              <li>Developed interactive dashboards and analytical reports using Power BI and Microsoft Excel, enabling stakeholders to monitor key performance indicators (KPIs) and make informed business decisions.</li>
              <li>Performed data extraction, cleaning, transformation, and exploratory data analysis (EDA) using Python and SQL, uncovering actionable insights, identifying trends, and supporting business process improvements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
