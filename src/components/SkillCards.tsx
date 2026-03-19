import "./styles/SkillCards.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "C#"],
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Flask",
      "Django",
      "Spring Boot",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "HTML", "CSS"],
  },
  {
    title: "Data & Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle",
      "ETL",
      "Kafka",
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "NLP",
      "Transformers",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LightGBM",
    ],
  },
];

const SkillCards = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container section-container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pill-list">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;