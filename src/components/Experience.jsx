
import { useEffect, useRef } from "react";

export default function Experience() {
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
    <section id="experience">
      <div className="section-label">
        <span></span>
      </div>

      <h2 className="section-title">
        Where I've <span>Worked</span>
      </h2>

      <div className="timeline reveal" ref={ref}>

        {/* Viyugaa Technologies */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">
                  Data Analyst – Medical Billing
                </div>

                <div className="exp-company">
                  Viyugaa Technologies
                </div>
              </div>

              <div className="exp-date">
                June 2026 – Present
              </div>
            </div>

            <ul className="exp-list">
              <li>
                Reviewed and validated dental and insurance claim forms
                against source documents, verifying signature fields, dates,
                and provider information for accuracy.
              </li>

              <li>
                Resolved field-level and page-level discrepancies using a
                data validation platform, correcting mismatched or missing
                entries to ensure compliance with billing standards.
              </li>

              <li>
                Achieved 98%+ accuracy while auditing and correcting over
                1,500 billing forms daily, maintaining productivity targets.
              </li>
            </ul>
          </div>
        </div>

        {/* UptoSkills */}
        <div className="timeline-item">
          <div className="timeline-dot" />

          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">
                  Business Analyst Intern – Team Lead
                </div>

                <div className="exp-company">
                  UptoSkills
                </div>
              </div>

              <div className="exp-date">
                March 2026 – June 2026
              </div>
            </div>

            <ul className="exp-list">
              <li>
                Led and mentored a team of 20 members, overseeing task
                allocation, progress tracking, and project execution to
                ensure timely delivery of objectives.
              </li>

              <li>
                Conducted SWOT analysis and business research to evaluate
                organizational performance, identify opportunities, and
                support strategic decision-making.
              </li>

              <li>
                Designed and delivered analytical reports and interactive
                dashboards using Power BI and Excel, providing actionable
                insights to stakeholders.
              </li>

              <li>
                Performed data cleaning, transformation, and exploratory
                data analysis (EDA) using Python and SQL to uncover trends
                and support business recommendations.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

