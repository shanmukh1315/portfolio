import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const CONTACT_LINKS = {
  github: "https://github.com/shanmukh1315",
  linkedin: "https://www.linkedin.com/in/shanmukha-srinivas-challa-36483224a/",
  resume: "",
};

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Name</h4>
            <p>Shanmukha Srinivas Challa</p>
            <h4>Email</h4>
            <p>
              <a
                href="mailto:shanmukhasrinivaschalla@gmail.com"
                data-cursor="disable"
              >
                shanmukhasrinivaschalla@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+12014285453" data-cursor="disable">
                +1 (201)-428-5453
              </a>
            </p>
            <div className="contact-box contact-box-footer">
              <h2>
                Open to full-stack, backend, and AI-focused software engineering
                opportunities.
              </h2>
              <h5>&copy; {new Date().getFullYear()} Shanmukha Srinivas Challa</h5>
            </div>
          </div>
          <div className="contact-side">
            <div className="contact-box contact-box-profiles">
              <h4>Profiles</h4>
              <a
                href={CONTACT_LINKS.github || undefined}
                target={CONTACT_LINKS.github ? "_blank" : undefined}
                rel={CONTACT_LINKS.github ? "noreferrer" : undefined}
                data-cursor="disable"
                className="contact-social"
              >
                GitHub <MdArrowOutward />
              </a>
              <a
                href={CONTACT_LINKS.linkedin || undefined}
                target={CONTACT_LINKS.linkedin ? "_blank" : undefined}
                rel={CONTACT_LINKS.linkedin ? "noreferrer" : undefined}
                data-cursor="disable"
                className="contact-social"
              >
                LinkedIn <MdArrowOutward />
              </a>
              <a
                href={CONTACT_LINKS.resume || "/full_stack.pdf"}
                target={CONTACT_LINKS.resume ? "_blank" : undefined}
                rel={CONTACT_LINKS.resume ? "noreferrer" : undefined}
                data-cursor="disable"
                className="contact-social"
              >
                Resume <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
