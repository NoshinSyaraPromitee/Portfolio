import "./Slideshow.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronIcon } from "../icons/icons";

function Slideshow({ images, title, emptyText }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!images || images.length === 0) {
    return (
      <div className="slideshow slideshow-empty">
        <span>{emptyText || "No images added for this project yet"}</span>
      </div>
    );
  }

  const goTo = (next, dir) => {
    setDirection(dir);
    setIndex((next + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slideshow-viewport">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="slideshow-image"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="slideshow-nav slideshow-nav-prev"
              onClick={() => goTo(index - 1, -1)}
              aria-label="Previous image"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              className="slideshow-nav slideshow-nav-next"
              onClick={() => goTo(index + 1, 1)}
              aria-label="Next image"
            >
              <ChevronIcon direction="right" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="slideshow-dots">
          {images.map((_, i) => (
            <button
              type="button"
              key={i}
              className={`slideshow-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
