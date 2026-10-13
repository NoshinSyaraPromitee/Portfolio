import { useLocation } from "react-router-dom";
import Particles from "./Particles";

// Site-wide particle layer behind every page except Home
function ParticlesBackground() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <div className="site-particles-bg">
      <Particles
        particleCount={1000}
        particleSpread={47}
        speed={0.46}
        particleColors={["#f0d174", "#ffd5b4"]}
        moveParticlesOnHover
        particleHoverFactor={1}
        alphaParticles={false}
        particleBaseSize={100}
        sizeRandomness={1}
        cameraDistance={20}
        disableRotation={false}
      />
    </div>
  );
}

export default ParticlesBackground;
