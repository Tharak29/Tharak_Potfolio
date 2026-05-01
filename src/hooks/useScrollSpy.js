import { useEffect, useState } from 'react';

export function useScrollSpy(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      let current = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids]);

  return active;
}