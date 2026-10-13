import { useRef, useEffect } from "react";
import "./Ballpit.css";

const DEFAULT_COLORS = ["#C9A84C", "#D9B96B", "#F7F1E3", "#8B6A2F"];
const BURST_RADIUS = 160;
const BURST_FORCE = 9;

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

    // position of a mouse or finger, relative to the canvas
    const pointAt = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = clientX - rect.left;
      mouse.current.y = clientY - rect.top;
    };
    const clear = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    // tap / click: knock nearby balls away
    const burst = () => {
      const { x, y } = mouse.current;
      for (const b of balls) {
        const dx = b.x - x;
        const dy = b.y - y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < BURST_RADIUS) {
          const force = (1 - dist / BURST_RADIUS) * BURST_FORCE;
          b.vx += (dx / dist) * force;
          b.vy += (dy / dist) * force - 2;
        }
      }
    };

    // mouse
    const onMouseMove = (e) => pointAt(e.clientX, e.clientY);
    const onMouseDown = (e) => {
      pointAt(e.clientX, e.clientY);
      burst();
    };

    // touch (passive, so the page still scrolls normally)
    let releaseTimer;
    const onTouchStart = (e) => {
      const t = e.touches[0];
      if (!t) return;
      clearTimeout(releaseTimer);
      pointAt(t.clientX, t.clientY);
      burst();
    };
    const onTouchMove = (e) => {
      const t = e.touches[0];
      if (t) pointAt(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      releaseTimer = setTimeout(clear, 250);
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseleave", clear);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);
    canvas.addEventListener("touchcancel", onTouchEnd);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      clearTimeout(releaseTimer);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseleave", clear);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [count, gravity, friction, wallBounce, followCursor, colors]);

  return (
    <div className="ballpit-wrapper">
      <canvas ref={canvasRef} className="ballpit-canvas" />
    </div>
  );
}

export default Ballpit;