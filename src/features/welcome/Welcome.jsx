import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaFlask,
  FaCompass
} from "react-icons/fa";
import "./Welcome.css";

const options = [
  {
    key: "designer",
    label: "Designer",
    desc: "UI/UX, layouts & visual craft",
    icon: <FaPaintBrush />,
    path: "/projects",
    category: "all"
  },
  {
    key: "web",
    label: "Web Developer",
    desc: "Full-stack MERN applications",
    icon: <FaLaptopCode />,
    path: "/projects",
    category: "mern"
  },
  {
    key: "mobile",
    label: "Mobile App Developer",
    desc: "Cross-platform mobile apps",
    icon: <FaMobileAlt />,
    path: "/projects",
    category: "mobile"
  },
  {
    key: "ml",
    label: "Machine Learning Enthusiast",
    desc: "AI / ML models & experiments",
    icon: <FaBrain />,
    path: "/projects",
    category: "ml"
  },
  {
    key: "researcher",
    label: "Researcher",
    desc: "Papers, publications & research",
    icon: <FaFlask />,
    path: "/research",
    category: null
  },
  {
    key: "explore",
    label: "Just Exploring",
    desc: "Take me to the homepage",
    icon: <FaCompass />,
    path: "/",
    category: null
  }
];

function Welcome({ onSelect }) {
  return (
    <div className="welcome">
      <div className="welcome-inner">
        <motion.p
          className="welcome-eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome
        </motion.p>

        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          In what role you wanna see <span className="welcome-name">Noshin Syara</span>?
        </motion.h1>

        <div className="welcome-grid">
          {options.map((option, i) => (
            <motion.button
              key={option.key}
              type="button"
              className="welcome-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              onClick={() => onSelect(option)}
            >
              <span className="welcome-card-icon">{option.icon}</span>
              <span className="welcome-card-label">{option.label}</span>
              <span className="welcome-card-desc">{option.desc}</span>
            </motion.button>
          ))}
        </div>

        <motion.button
          type="button"
          className="welcome-skip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => onSelect({ path: "/", category: null })}
        >
          Skip &rarr;
        </motion.button>
      </div>
    </div>
  );
}

export default Welcome;
