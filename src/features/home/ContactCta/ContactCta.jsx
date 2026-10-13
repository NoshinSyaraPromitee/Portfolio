import { Link } from "react-router-dom";
import Ballpit from "../../../shared/effects/Ballpit/Ballpit";
import "./ContactCta.css";

function ContactCta() {
  return (
    <section className="ballpit-section">
      <div className="ballpit-content">
        <h2>Contact me for any kind of collaboration</h2>
        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>

      <div className="ballpit-container">
        <Ballpit count={30} />
      </div>
    </section>
  );
}

export default ContactCta;
