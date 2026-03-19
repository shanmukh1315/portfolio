import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Full-Stack Engineer focused on building reliable backend
          systems and practical end-to-end products. I work across Python,
          React, SQL, and cloud workflows to deliver software that is clean,
          scalable, and production-ready.
        </p>
        <p className="para">
          My core stack includes Python, FastAPI, Flask, React, PostgreSQL,
          Docker, and testing. I enjoy turning complex requirements into
          maintainable systems with strong API design, performance, and
          developer experience.
        </p>
        <p className="para">
          I am currently pursuing an M.S. in Data Science at NJIT while
          continuing to build full-stack and AI-supported applications that
          balance speed, clarity, and long-term maintainability.
        </p>
      </div>
    </div>
  );
};

export default About;
