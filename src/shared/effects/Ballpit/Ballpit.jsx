import { useRef, useEffect } from "react";
import "./Ballpit.css";

const DEFAULT_COLORS = ["#C9A84C", "#D9B96B", "#F7F1E3", "#8B6A2F"];

function Ballpit({
  count = 30,
  gravity = 0.08,
  friction = 0.995,
  wallBounce = 0.95,
  followCursor = true,
  colors = DEFAULT_COLORS
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame;

    const resize = () => {
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const balls = Array.from({ length: count }, () => ({
      radius: 6 + Math.random() * 10,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    const step = (b) => {
      b.vy += gravity;
      b.vx *= friction;
      b.vy *= friction;
      b.x += b.vx;
      b.y += b.vy;

      if (b.x + b.radius > width) {
        b.x = width - b.radius;
        b.vx *= -wallBounce;
      }
      if (b.x - b.radius < 0) {
        b.x = b.radius;
        b.vx *= -wallBounce;
      }
      if (b.y + b.radius > height) {
        b.y = height - b.radius;
        b.vy *= -wallBounce;
      }
      if (b.y - b.radius < 0) {
        b.y = b.radius;
        b.vy *= -wallBounce;
      }

      // balls are pushed away from the cursor
      if (followCursor) {
        const dx = mouse.current.x - b.x;
        const dy = mouse.current.y - b.y;
        if (Math.hypot(dx, dy) < 120) {
          b.vx -= dx * 0.0018;
          b.vy -= dy * 0.0018;
        }
      }

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = b.color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      balls.forEach(step);
      frame = requestAnimationFrame(animate);
    };
    animate();

    const move = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const leave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mouseleave", leave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mouseleave", leave);
    };
  }, [count, gravity, friction, wallBounce, followCursor, colors]);

  return (
    <div className="ballpit-wrapper">
      <canvas ref={canvasRef} className="ballpit-canvas" />
    </div>
  );
}

export default Ballpit;
