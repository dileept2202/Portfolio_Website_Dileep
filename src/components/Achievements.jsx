import { useEffect, useRef } from "react";

const achievements = [
  {
    img: "/Achievement1.jpg",
    alt: "Dark Pattern Buster Hackathon",
    icon: "🏆",
    title: "National Finalist – Dark Pattern Buster Hackathon",
    desc: "Selected as a finalist in the prestigious Dark Pattern Buster Hackathon conducted by the Ministry of Consumer Affairs at IIT Varanasi, competing with teams from across India and demonstrating innovative problem-solving skills in consumer protection and digital ethics.",
  },
  {
    img: "/Achievement2.jpg",
    alt: "National Level Codathon Winner",
    icon: "💻",
    title: "First Place – National Level Codathon",
    desc: "Secured 1st Prize in the Codathon event at a national-level technical symposium hosted by Kongu Engineering College, showcasing strong programming, analytical thinking, and competitive coding abilities.",
  },
  {
    img: "/Achievement3.jpg",
    alt: "NCC Camp Senior",
    icon: "🎖️",
    title: "Camp Senior – NCC CATC Camp",
    desc: "Appointed as Camp Senior during the NCC Combined Annual Training Camp (CATC) at Kongu Engineering College, successfully leading and coordinating more than 400 cadets while demonstrating exceptional leadership, discipline, and organizational skills.",
  },
  {
    img: "/Achievement4.jpg",
    alt: "Best in Training NCC",
    icon: "⭐",
    title: "Best in Training – National Cadet Corps",
    desc: "Recognized as 'Best in Training' for outstanding performance during the NCC Training Year 2024–2025 at Kongu Engineering College, reflecting excellence in mentoring junior cadets, leadership, and commitment to team development.",
  },
  {
    img: "/Achievement5.jpg",
    alt: "Rock Climbing Training Camp",
    icon: "🧗",
    title: "AIRCTC Runner-Up – Rock Climbing Training Camp",
    desc: "Qualified for the prestigious Rock Climbing Training Camp (RCTC) as one of only 15 cadets selected to represent Tamil Nadu and contributed to securing 2nd Place at the All India Rock Climbing Training Camp (AIRCTC) 2026.",
  },
  {
    img: "/Achievement6.jpg",
    alt: "Thal Sainik Camp Selection",
    icon: "🇮🇳",
    title: "Participant – Thal Sainik Camp Selection Camp",
    desc: "Participated in the CATC-cum-Thal Sainik Camp (TSC) Selection Camp organized by 12 TN Battalion NCC at KSR College of Arts and Science, Salem, demonstrating dedication, discipline, and military training excellence.",
  },
  {
    img: "/Achievement7.jpg",
    alt: "Madurai Digital Awards",
    icon: "🎬",
    title: "Official Nominee – Madurai Digital Awards",
    desc: "Earned a nomination at the Madurai Digital Awards through a short film project, gaining recognition for creative storytelling, teamwork, and contributions to digital media production.",
  },
  {
    img: "/Achievement8.jpg",
    alt: "Enthusia 2K23 Short Film",
    icon: "🎥",
    title: "Second Place – Short Film Competition (Enthusia 2K23)",
    desc: "Secured 2nd Prize and a cash award of ₹2,500 in the Short Film Competition at Enthusia 2K23, recognized for creativity, direction, and impactful visual storytelling.",
  },
  {
    img: "/Achievement9.jpg",
    alt: "Enthusia 2K26 Skit Performance",
    icon: "🎭",
    title: "First Place – Skit Performance (Enthusia 2K26)",
    desc: "Won 1st Prize and a cash award of ₹3,000 in the Skit Performance event at Enthusia 2K26, showcasing outstanding stage presence, teamwork, communication, and performance skills.",
  },
];

export default function Achievements() {
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
    <section id="achievements">
      <div className="section-label"><span></span></div>
      <h2 className="section-title">My <span>Achievements</span></h2>
      <div className="achievements-grid reveal" ref={ref}>
        {achievements.map((a) => (
          <div className="achievement-card" key={a.title}>
            <div className="achievement-img-wrap">
              <img src={a.img} alt={a.alt} onError={handleImgError} />
              <div className="achievement-img-placeholder" style={{ display: "none" }}>
                <span style={{ fontSize: "2.5rem" }}>{a.icon}</span>
                Achievement Image
              </div>
            </div>
            <div className="achievement-body">
              <div className="achievement-icon-row">
                <span className="achievement-icon">{a.icon}</span>
                <div className="achievement-title">{a.title}</div>
              </div>
              <div className="achievement-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
