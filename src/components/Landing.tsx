import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="home">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SHANMUKHA
              <br />
              <span>SRINIVAS CHALLA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Python-Focused</h3>
            <h2 className="landing-info-h2">Full-Stack Engineer</h2>
            <div className="landing-focus-lines">
              <div className="landing-focus-item">Backend APIs</div>
              <div className="landing-focus-item">AI Products</div>
            </div>
            <p className="landing-subline">
              Building REST APIs, full-stack applications, and AI-backed
              products.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
