import { useState } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { skills } from '../data/portfolioData';

const CATS = [
  { key: 'languages', label: 'Languages' },
  { key: 'web', label: 'Web / Backend' },
  { key: 'data', label: 'Data / ML' },
  { key: 'tools', label: 'Tools' },
  { key: 'hardware', label: 'Hardware' },
];

export default function Skills() {
  const [active, setActive] = useState('languages');
  const [ref, visible] = useIntersection();

  return (
    <section id="skills" className="section section--alt">
      <div className="section-wrap">
        <div className={`section-header reveal${visible ? ' visible' : ''}`} ref={ref}>
          <div className="s-eyebrow">What I work with</div>
          <h2 className="s-title">Tech Stack</h2>
          <p className="s-sub">Tools and technologies I've used in projects, coursework, and internships.</p>
        </div>

        <div className="skills-layout">
          <div className="skills-cats">
            {CATS.map(c => (
              <button
                key={c.key}
                className={`skill-cat-btn${active === c.key ? ' active' : ''}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="skills-chips">
            {skills[active].map((s, i) => (
              <div key={i} className="s-chip">
                <div className="s-chip__icon">{s.icon}</div>
                <div className="s-chip__info">
                  <div className="s-chip__name">{s.name}</div>
                  <div className={`s-chip__level s-chip__level--${s.cls}`}>{s.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}