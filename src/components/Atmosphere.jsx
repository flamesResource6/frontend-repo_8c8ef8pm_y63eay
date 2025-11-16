import { useEffect, useRef } from "react";

// Soft atmospheric fog + drifting dust particles on a canvas
export default function Atmosphere({ density = 40, tint = "#cbd5e1", opacity = 0.08 }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      particlesRef.current = Array.from({ length: density }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * Math.PI * 2,
        s: Math.random() * 0.15 + 0.03, // speed
        o: Math.random() * 0.35 + 0.15, // opacity strength
      }));
    };

    const fogGradient = () => {
      const g = ctx.createRadialGradient(width * 0.5, height * 0.4, 50, width * 0.5, height * 0.4, Math.max(width, height));
      g.addColorStop(0, `rgba(255,255,255,${opacity})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      return g;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle haze/fog
      ctx.fillStyle = fogGradient();
      ctx.fillRect(0, 0, width, height);

      // dust particles
      particlesRef.current.forEach(p => {
        p.a += 0.002; // gentle drift
        p.x += Math.cos(p.a) * p.s;
        p.y += Math.sin(p.a * 0.6) * p.s * 0.6 + 0.02;

        // wrap
        if (p.x > width + 10) p.x = -10; if (p.x < -10) p.x = width + 10;
        if (p.y > height + 10) p.y = -10; if (p.y < -10) p.y = height + 10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${tint}22`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(render);
    };

    init();
    render();

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [density, tint, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      style={{ mixBlendMode: "screen", opacity: 0.5 }}
    />
  );
}
