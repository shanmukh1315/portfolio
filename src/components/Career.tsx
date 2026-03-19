import "./styles/Career.css";

const Career = () => {
  return (
    <>
      <div className="career-section section-container" id="experience">
        <div className="career-container">
          <h2>Experience</h2>

          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Virtusa | Hyderabad, India</h5>
                <h5 className="career-year">2024</h5>
              </div>
              <p>
                Built and optimized C# / ASP.NET Core REST APIs for high-volume
                processing, refactored React components into reusable patterns,
                and improved release reliability with Azure DevOps and Jenkins.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Sanjana Logistics LLP | Visakhapatnam, India</h5>
                <h5 className="career-year">2023</h5>
              </div>
              <p>
                Optimized Oracle SQL queries, built KPI dashboards with React
                and Spring Boot, and supported AWS migration to reduce
                infrastructure cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="education-section section-container" id="education">
        <div className="career-container">
          <h2>Education</h2>

          <div className="career-info">
            <div className="career-timeline">
              <div className="career-dot"></div>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>MS in Data Science</h4>
                <h5>NJIT | Newark, NJ</h5>
                <h5 className="career-year">2024 - 2026</h5>
              </div>
              <p>
                Graduate study focused on data systems, machine learning, and
                analytics alongside backend, full-stack, and AI software
                development.
              </p>
            </div>

            <div className="career-info-box">
              <div className="career-role">
                <h4>BTech in Computer Science</h4>
                <h5>Gayatri Vidya Parishad College | India</h5>
                <h5 className="career-year">2020 - 2024</h5>
              </div>
              <p>
                Built a strong foundation in software engineering, databases,
                and system design for backend and full-stack development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
