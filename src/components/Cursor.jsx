import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ mx: -200, my: -200, tx: -200, ty: -200 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.tx += (mx - pos.current.tx) * 0.1;
      pos.current.ty += (my - pos.current.ty) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
      if (trailRef.current) {
        trailRef.current.style.left = pos.current.tx + 'px';
        trailRef.current.style.top = pos.current.ty + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const hoverEls = () => document.querySelectorAll('a, button, .s-chip, .proj-card, .cert-item, .a-card, .skill-cat-btn, .contact-item');

    const addHover = () => {
      hoverEls().forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorRef.current?.classList.add('cursor--hover');
          trailRef.current?.classList.add('cursor-trail--hover');
        });
        el.addEventListener('mouseleave', () => {
          cursorRef.current?.classList.remove('cursor--hover');
          trailRef.current?.classList.remove('cursor-trail--hover');
        });
      });
    };

    const timer = setTimeout(addHover, 500);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  );
}