import { useEffect, useRef } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import "./Loader.css";

// How long the loader stays on screen before the site opens (ms)
const MIN_DURATION = 3000;

const layout = new Layout({ fit: Fit.Contain, alignment: Alignment.Center });

function Loader({ onFinish }) {
  const { RiveComponent } = useRive({
    src: "/animations/book_loading.riv",
    autoplay: true,
    layout
  });

  // Keep the latest callback without restarting the timer on every render
  const finishRef = useRef(onFinish);
  useEffect(() => {
    finishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (finishRef.current) finishRef.current();
    }, MIN_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader">
      <div className="loader-main">
        <div className="loader-rive">
          <RiveComponent />
        </div>
        <p className="loader-caption">Loading Portfolio...</p>
      </div>
    </div>
  );
}

export default Loader;
