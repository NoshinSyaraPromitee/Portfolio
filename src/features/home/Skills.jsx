import "./Skills.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotCard from "../../shared/ui/SpotCard/SpotCard";
import { skills, cats } from "../../data/skills";

function Skills() {
  const [cat, setCat] = useState("All");
  const shown = skills.filter((s) => cat === "All" || s.cat === cat);

  return (
    <section id="skills" className="skills">
      <div className="container skills-wrap">
        <h2 className="sec-title">What I work with</h2>

        <div className="seg skills-filter" role="tablist" aria-label="Filter skills">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={cat === c}
              className={cat === c ? "seg-btn on" : "seg-btn"}
              onClick={() => setCat(c)}
            >
              {cat === c && (
                <motion.span
                  layoutId="skill-pill"
                  className="seg-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="seg-label">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((s) => (
              <motion.div
                layout
                key={s.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3, ease: [0.22, 0.8, 0.3, 1] }}
              >
                <SpotCard className="skill-card">
                  <img src={s.icon} alt="" className="skill-icon" loading="lazy" />
                  <span className="skill-name">{s.name}</span>
                  <small>{s.cat}</small>
                </SpotCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
