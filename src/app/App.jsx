import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader";
import Welcome from "../features/welcome/Welcome";
import Navbar from "../shared/layout/Navbar/Navbar";
import Footer from "../shared/layout/Footer/Footer";
import ErrorBoundary from "../shared/ui/ErrorBoundary/ErrorBoundary";
import ScrollProgress from "../shared/ui/ScrollProgress/ScrollProgress";
import { shop } from "../data/shop";

// WebGL background (ogl) is loaded after first paint to keep the main bundle small
const ParticlesBackground = lazy(() => import("../shared/effects/Particles/ParticlesBackground"));

const Home = lazy(() => import("../features/home/Home"));
const Education = lazy(() => import("../features/education/Education"));
const Projects = lazy(() => import("../features/projects/Projects"));
const ProjectDetail = lazy(() => import("../features/projects/ProjectDetail"));
const Research = lazy(() => import("../features/research/Research"));
const Experience = lazy(() => import("../features/experience/Experience"));
const Achievements = lazy(() => import("../features/achievements/Achievements"));
const Certificates = lazy(() => import("../features/certificates/Certificates"));
const Contact = lazy(() => import("../features/contact/Contact"));
const Ideas = lazy(() => import("../features/ideas/Ideas"));
const Designer = lazy(() => import("../features/designer/Designer"));
const ComingSoon = lazy(() => import("../shared/ui/ComingSoon/ComingSoon"));

const THEME_KEY = "portfolio-theme";
const PERSONA_KEY = "persona-category";

// Sends the visitor to the page picked on the Welcome screen, once.
// (navigate changes on every route change, so it must not be an effect dependency.)
function StartRedirect({ to }) {
  const navigate = useNavigate();
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    if (to && to !== "/") navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [startPath, setStartPath] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem(THEME_KEY) === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
    localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  if (startPath === null) {
    return (
      <Welcome
        onSelect={(option) => {
          if (option.category) {
            sessionStorage.setItem(PERSONA_KEY, option.category);
          } else {
            sessionStorage.removeItem(PERSONA_KEY);
          }
          setStartPath(option.path);
        }}
      />
    );
  }

  return (
    <BrowserRouter>
      <StartRedirect to={startPath} />
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>
      <ScrollProgress />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((v) => !v)} />

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/research" element={<Research />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/designer" element={<Designer />} />
            <Route
              path="/blog"
              element={<ComingSoon title="Blog" subtitle="Gonna share my journey of what i know" />}
            />
            <Route
              path="/shop"
              element={<ComingSoon title={shop.title} subtitle={shop.subtitle} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
