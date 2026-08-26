import { useEffect, useRef } from "react";

const projects = [
  {
    img: "/img1.png",
    alt: "Water Potability Prediction",
    placeholderIcon: "💧",
    placeholderLabel: "Water Potability Project",
    title: "Water Potability Prediction using Machine Learning",
    desc: "Developed a machine learning model to predict water potability using water quality parameters, with comprehensive data cleaning, feature engineering, and visual dashboards for analysis.",
    stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/dileept2202/Water_Portability_Prediction",
  },
  {
    img: "/img2.png",
    alt: "Breast Cancer Diagnosis",
    placeholderIcon: "🫀",
    placeholderLabel: "Breast Cancer Diagnosis",
    title: "Deep Learning Framework for Breast Cancer Diagnosis",
    desc: "Designed a deep learning framework for breast cancer classification using GAN-based data augmentation and EfficientNet-B7, with Grad-CAM for explainable AI and enhanced prediction accuracy.",
    stack: ["Python", "TensorFlow", "EfficientNet-B7", "GAN", "Grad-CAM"],
    github: "https://github.com/dileept2202/Deep_Learning_Framework_For_Breast_Cancer_Diagnosis",
  },
  {
    img: "/img3.png",
    alt: "Transport Management System",
    placeholderIcon: "🚌",
    placeholderLabel: "Transport Management System",
    title: "Kongu Transport Management System",
    desc: "Built a full-stack MERN transport management system for Kongu Engineering College, featuring driver and administrator logins, issue reporting, status tracking, and a database management dashboard.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/dileept2202/Kongu_Bus_Transportation_System",
  },
  {
  img: "/img4.png",
  alt: "Amazon Prime Dashboard",
  placeholderIcon: "📊",
  placeholderLabel: "Amazon Prime Analytics Dashboard",
  title: "Amazon Prime Content Analytics Dashboard",
  desc: "Developed an interactive business intelligence dashboard using Power BI to analyze Amazon Prime's content library. Created dynamic visualizations and insightful reports to evaluate content distribution, genre trends, ratings, release patterns, and regional performance, enabling data-driven decision-making through comprehensive analytics.",
  stack: ["Power BI", "Data Visualization", "Data Analytics", "Dashboard Design", "Business Intelligence"],
  github: "https://github.com/dileept2202/AMAZON-PRIME-DASHBOARD",
},
];

function ProjectCard({ project }) {
  const handleImgError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <div className="project-card">
      <div className="project-img-wrap">
        <img src={project.img} alt={project.alt} onError={handleImgError} />
        <div className="project-img-placeholder" style={{ display: "none" }}>
          <span style={{ fontSize: "3rem" }}>{project.placeholderIcon}</span>
          {project.placeholderLabel}
        </div>
      </div>
      <div className="project-body">
        <div className="project-number">{project.num}</div>
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span className="stack-tag" key={s}>{s}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">Things I've <span>Built</span></h2>
      <div className="projects-grid reveal" ref={ref}>
        {projects.map((p) => (
          <ProjectCard project={p} key={p.num} />
        ))}
      </div>
    </section>
  );
}
