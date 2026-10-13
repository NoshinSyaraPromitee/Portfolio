import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "../../shared/ui/AnimatedText/AnimatedText";
import CVDropdown from "../../shared/ui/CVDropdown/CVDropdown";
import SocialLinks from "../../shared/ui/SocialLinks/SocialLinks";
import SpotCard from "../../shared/ui/SpotCard/SpotCard";
import socials from "../../data/socials";
import IDCard from "./IDCard/IDCard";

const paths = [
  { to: "/projects", title: "Projects", sub: "Things I've built" },
  { to: "/experience", title: "Experience", sub: "Where I've worked" },
  { to: "/research", title: "Research", sub: "Papers and ideas" },
  { to: "/contact", title: "Contact", sub: "Let's talk" }
];

const ease = [0.22, 0.8, 0.3, 1];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease }
});

function Hero() {
  // Soft light that follows the cursor across the hero
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="hero" onMouseMove={onMove}>
      <div className="hero-light" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-left">
          <motion.h1 className="hero-name" {...up(0.08)}>
            Noshin Syara
            <br />
            <span className="hero-accent">Promitee</span>
          </motion.h1>

          <motion.div className="hero-role" {...up(0.16)}>
            <AnimatedText />
          </motion.div>

          <motion.div className="hero-buttons" {...up(0.32)}>
            <Link to="/projects" className="primary-btn">
              View Projects <span aria-hidden="true">&rarr;</span>
            </Link>
            <CVDropdown variant="hero" />
          </motion.div>

          <motion.div {...up(0.4)}>
            <SocialLinks items={socials} />
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <IDCard />
        </motion.div>
      </div>

      <div className="explore">
        <h2 className="sec-title">Explore</h2>
        <div className="explore-grid">
          {paths.map((p, i) => (
            <motion.div
              key={p.to}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <SpotCard as={Link} to={p.to} className="explore-card">
                <strong>{p.title}</strong>
                <span className="explore-sub">{p.sub}</span>
              </SpotCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;