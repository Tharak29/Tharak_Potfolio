import { useEffect, useState } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const LINKS = [
  { id: 'about', label: 'About', num: '01.' },
  { id: 'skills', label: 'Skills', num: '02.' },
  { id: 'journey', label: 'Journey', num: '03.' },
  { id: 'projects', label: 'Projects', num: '04.' },
  { id: 'certs', label: 'Certs', num: '05.' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(LINKS.map(l => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__logo">
        <div className="nav__logo-dot" />
        TCM
      </div>
      <div className="nav__right">
        <ul className="nav__links">
          {LINKS.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
              >
                <span className="num">{l.num}</span>{l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav__hire">Hire Me</a>
      </div>
    </nav>
  );
}