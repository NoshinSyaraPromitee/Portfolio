import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PenTool, CodeXml, Smartphone, BrainCircuit, FlaskConical, Compass } from "lucide-react";
import "./Welcome.css";

const options = [
  {
    key: "designer",
    label: "Designer",
    desc: "UI/UX, layouts & visual craft",
    opens: "Projects",
    Icon: PenTool,
    path: "/projects",
    category: "all"
  },
  {
    key: "web",
    label: "Web Developer",
    desc: "Full-stack MERN applications",
    opens: "Projects · MERN Stack",
    Icon: CodeXml,
    path: "/projects",
    category: "mern"
  },
  {
    key: "mobile",
    label: "Mobile App Developer",
    desc: "Cross-platform mobile apps",
    opens: "Projects · Mobile Apps",
    Icon: Smartphone,
    path: "/projects",
    category: "mobile"
  },
  {
    key: "ml",
    label: "Machine Learning Enthusiast",
    desc: "AI / ML models & experiments",
    opens: "Projects · ML Projects",
    Icon: BrainCircuit,
    path: "/projects",
    category: "ml"
  },
  {
    key: "researcher",
    label: "Researcher",
    desc: "Papers, publications & research",
    opens: "Research",
    Icon: FlaskConical,
    path: "/research",
    category: null
  },
  {
    key: "explore",
    label: "Just Exploring",
    desc: "Take me to the homepage",
    opens: "Home",
    Icon: Compass,
    path: "/",
    category: null
  }
];

const MID = (options.length - 1) / 2;
const PICK_DELAY = 650; // ms the picked card is shown before the site opens

function useViewport() {
  const [w, setW] = useState(() => window.innerWidth);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w;
}

// where each card sits: a fanned hand on desktop, a tilted grid on phones
// (hovering only changes colour - see .pc-card.on in Welcome.css)
function cardPose(i, { picked, fan, spread }) {
  const d = i - MID;

  if (!fan) {
    const tilt = i % 2 ? 2.5 : -2.5;
    if (picked !== null) {
      return i === picked
        ? { x: 0, y: -8, rotate: 0, scale: 1.08, opacity: 1 }
        : { x: 0, y: 30, rotate: tilt, scale: 0.9, opacity: 0 };
    }
    return { x: 0, y: 0, rotate: tilt, scale: 1, opacity: 1 };
  }

  if (picked !== null) {
    return i === picked
      ? { x: 0, y: -70, rotate: 0, scale: 1.22, opacity: 1 }
      : { x: d * spread * 1.6, y: 420, rotate: d * 18, scale: 0.9, opacity: 0 };
  }

  return { x: d * spread, y: d * d * 8, rotate: d * 7, scale: 1, opacity: 1 };
}

function Welcome({ onSelect }) {
  const vw = useViewport();
  const fan = vw > 760;
  const spread = Math.max(92, Math.min(150, (vw - 260) / 5));

  const [hover, setHover] = useState(null);
  const [picked, setPicked] = useState(null);
  const [dealt, setDealt] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDealt(true), 1100);
    return () => clearTimeout(t);
  }, []);

  const pick = (i) => {
    if (picked !== null) return;
    setPicked(i);
    setTimeout(() => onSelect(options[i]), PICK_DELAY);
  };

  const shown = picked ?? hover;
  const caption = shown === null ? null : options[shown];

  return (
    <div className={picked !== null ? "pc-page picked" : "pc-page"}>
      <header className="pc-head">
        <motion.h1
          className="pc-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Which role you wanna see <span className="pc-name">Noshin Syara Promitee</span> as?
        </motion.h1>
      </header>

      <div
        className={fan ? "pc-hand fan" : "pc-hand grid"}
        style={fan ? { "--spread": `${spread}px` } : undefined}
        onMouseLeave={() => setHover(null)}
      >
        {options.map((o, i) => {
          const pose = cardPose(i, { picked, fan, spread });
          const { Icon } = o;
          return (
            <motion.button
              key={o.key}
              type="button"
              className={i === shown ? "pc-card on" : "pc-card"}
              style={{ zIndex: i === shown ? 20 : 10 - Math.abs(Math.round(i - MID)) }}
              initial={{ x: 0, y: fan ? 520 : 60, rotate: 0, scale: 0.9, opacity: 0 }}
              animate={pose}
              transition={{
                type: "spring",
                stiffness: 210,
                damping: 22,
                delay: dealt ? 0 : 0.35 + i * 0.09
              }}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onClick={() => pick(i)}
              aria-label={`${o.label}: ${o.desc}`}
            >
              <span className="pc-icon" aria-hidden="true">
                <Icon strokeWidth={1.1} />
              </span>
              <span className="pc-label">{o.label}</span>
              <span className="pc-desc">{o.desc}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="pc-foot">
        <p className="pc-caption" aria-live="polite">
        
        </p>
        <button
          type="button"
          className="pc-skip"
          onClick={() => onSelect({ path: "/", category: null })}
        >
          Skip to homepage &rarr;
        </button>
      </div>
    </div>
  );
}

export default Welcome;