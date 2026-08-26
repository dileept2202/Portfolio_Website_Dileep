import { useEffect, useRef } from "react";

const categories = [
  {
    icon: "💻",
    bg: "rgba(0,198,255,0.1)",
    title: "Programming & Query Languages",
    tags: ["Python", "SQL"],
  },
  {
    icon: "📊",
    bg: "rgba(123,47,247,0.1)",
    title: "Data Analytics & Business Intelligence",
    tags: [
      "Power BI",
      "Tableau",
      "Microsoft Excel",
      "EDA",
      "Data Cleaning",
      "Data Visualization",
      "Data Modeling",
      "Dashboard Development",
      "Business Intelligence",
      "Reporting & Insights",
    ],
  },
  {
    icon: "🧠",
    bg: "rgba(0,255,163,0.08)",
    title: "Machine Learning & Artificial Intelligence",
    tags: [
      "Scikit-Learn",
      "TensorFlow",
      "Deep Learning",
      "GAN",
      "Grad-CAM",
      "EfficientNet",
      "Model Training",
      "Feature Engineering",
      "Predictive Analytics",
      "Generative AI",
      "Prompt Engineering",
    ],
  },
  {
    icon: "🗄️",
    bg: "rgba(0,198,255,0.1)",
    title: "Databases",
    tags: [
      "MySQL",
      "MongoDB",
      "CRUD Operations",
    ],
  },
  {
    icon: "🌐",
    bg: "rgba(123,47,247,0.1)",
    title: "Full-Stack Web Development",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Responsive Design",
      "MongoDB",
      "MERN Stack",
    ],
  },
  {
    icon: "⚙️",
    bg: "rgba(0,198,255,0.1)",
    title: "Development Tools & Platforms",
    tags: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Postman",
      "npm",
    ],
  },
  {
    icon: "📈",
    bg: "rgba(123,47,247,0.1)",
    title: "Data Science & Statistics",
    tags: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistical Analysis",
      "Data Interpretation",
      "Data Preprocessing",
    ],
  },
  {
    icon: "🚀",
    bg: "rgba(0,255,163,0.08)",
    title: "Project & Leadership Skills",
    tags: [
      "Project Management",
      "Team Leadership",
      "Mentoring",
      "Strategic Planning",
      "Decision Making",
      "Event Coordination",
    ],
  },
  {
    icon: "🤝",
    bg: "rgba(0,255,163,0.08)",
    title: "Professional Skills",
    tags: [
      "Communication",
      "Problem Solving",
      "Analytical Thinking",
      "Team Management",
      "Adaptability",
      "Time Management",
      "Presentation Skills",
      "Critical Thinking",
    ],
  },
];

export default function Skills() {
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
    <section id="skills">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">What I <span>Know</span></h2>
      <div className="skills-grid reveal" ref={ref}>
        {categories.map((cat) => (
          <div className="skill-category" key={cat.title}>
            <div className="skill-cat-header">
              <div className="skill-cat-icon" style={{ background: cat.bg }}>
                <span>{cat.icon}</span>
              </div>
              <div className="skill-cat-title">{cat.title}</div>
            </div>
            <div className="skill-tags">
              {cat.tags.map((t) => (
                <span className="skill-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
