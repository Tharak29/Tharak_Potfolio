import { useEffect, useRef } from 'react';

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [], W, H, rafId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const mkStars = () => {
      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.1 + 0.15,
        a: Math.random() * 0.7 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.008 + 0.003,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.phase += s.speed;
        const a = s.a * (0.5 + 0.5 * Math.sin(s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,230,255,${a})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(draw);
    };

    resize(); mkStars(); draw();

    const onResize = () => { resize(); mkStars(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="stars-canvas" />;
}