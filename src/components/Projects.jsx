import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { projects } from '../data/portfolioData';

function ProjCard({ p }) {
  const cardRef = useRef(null);
  const [ref, visible] = useIntersection();

  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`;
    card.style.transformStyle = 'preserve-3d';
  };

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={(el) => { cardRef.current = el; ref.current = el; }}
      className={`proj-card proj-card--${p.gradCls} reveal${visible ? ' visible' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="proj-card__top">
        <div className={`proj-icon proj-icon--${p.iconCls}`}>{p.icon}</div>
        <div className="proj-num">{p.num}</div>
      </div>
      <div className="proj-title">{p.title}</div>
      <div className="proj-desc">{p.desc}</div>
      <div className="proj-tags">
        {p.tags.map((t, i) => <span key={i} className="proj-tag">{t}</span>)}
      </div>
      <div className="proj-footer">
        <span className="proj-type">{p.type}</span>
        <button className="proj-arrow">↗</button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useIntersection();

  return (
    <section id="projects" className="section section--alt">
      <div className="section-wrap">
        <div ref={ref} className={`section-header reveal${visible ? ' visible' : ''}`}>
          <div className="s-eyebrow">Work</div>
          <h2 className="s-title">Things I've Built</h2>
          <p className="s-sub">Projects that solved actual problems, not just tutorials.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}