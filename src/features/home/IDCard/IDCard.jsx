import "./IDCard.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import photo from "../../../assets/images/profile.png";
import { profile } from "../../../data/profile";

const LANYARD_HEIGHT = 130; // must match .lanyard height in IDCard.css

function IDCard() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Where the card is pulled to (drives the clip, the straps and the swing)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // The card swings a little toward the side you pull it
  const swing = useTransform(x, [-250, 250], [-10, 10]);

  // The straps stay fixed at the top and stretch/tilt to follow the clip
  const strapAngle = useTransform(
    [x, y],
    ([vx, vy]) => (-Math.atan2(vx, LANYARD_HEIGHT + vy) * 180) / Math.PI
  );
  const strapStretch = useTransform([x, y], ([vx, vy]) =>
    Math.max(0.6, Math.hypot(vx, LANYARD_HEIGHT + vy) / LANYARD_HEIGHT)
  );

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    setRotation({
      x: -((py - rect.height / 2) / rect.height) * 18,
      y: ((px - rect.width / 2) / rect.width) * 18
    });
  }

  function handleMouseLeave() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div className="stage">
      <div className="stage-body">
        <motion.div
          className="idcard-wrapper"
          animate={{ y: [0, -6, 0] }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
        >
          {/* outer = rotates, inner = stretches (so the stretch follows the strap direction) */}
          <motion.div
            className="lanyard-pivot"
            style={{ rotate: strapAngle, transformOrigin: "top center" }}
          >
            <motion.div
              className="lanyard"
              style={{ scaleY: strapStretch, transformOrigin: "top center" }}
            >
              <div className="strap strap-left"></div>
              <div className="strap strap-right"></div>
            </motion.div>
          </motion.div>

          <motion.div className="clip" style={{ x, y }} />

          <motion.div
            className="id-card"
            style={{
              x,
              y,
              rotate: swing,
              cursor: "grab",
              touchAction: "none",
              userSelect: "none"
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 12 }}
            whileDrag={{ cursor: "grabbing" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: rotation.x,
              rotateY: rotation.y
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18
            }}
          >
            <div className="photo-section">
              <img src={photo} alt={profile.fullName} draggable="false" />
            </div>

            <div className="card-content">
              <div className="status">
                {profile.status}
              </div>

              <h2>{profile.name}</h2>
              <h4>{profile.subtitle}</h4>

              <div className="divider"></div>

              <div className="id-tags">
                {profile.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default IDCard;
