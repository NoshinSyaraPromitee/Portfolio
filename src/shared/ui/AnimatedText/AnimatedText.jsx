import { useEffect, useState } from "react";
import "./AnimatedText.css";

const TITLES = [
  "Computer Science Student",
  "Frontend Developer",
  "AI / ML Enthusiast",
  "Robotics Enthusiast",
  "Software Developer",
  "Problem Solver"
];
const INTERVAL_MS = 5000;
const FLIP_MS = 350;

function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    let flipTimer;
    const interval = setInterval(() => {
      setAnimate(false);
      flipTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % TITLES.length);
        setAnimate(true);
      }, FLIP_MS);
    }, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(flipTimer);
    };
  }, []);

  return <span className={`animated-title ${animate ? "show" : "hide"}`}>{TITLES[index]}</span>;
}

export default AnimatedText;
