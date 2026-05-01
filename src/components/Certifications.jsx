import { useIntersection } from '../hooks/useIntersection';
import { certs } from '../data/portfolioData';

export default function Certifications() {
  const [ref, visible] = useIntersection();

  return (
    <section id="certs" className="section section--dark">
      <div className="section-wrap">
        <div ref={ref} className={`section-header reveal${visible ? ' visible' : ''}`}>
          <div className="s-eyebrow">Certifications & Awards</div>
          <h2 className="s-title">Credentials</h2>
          <p className="s-sub">Courses I completed and badges I've earned along the way.</p>
        </div>
        <div className={`certs-grid reveal${visible ? ' visible' : ''}`}>
          {certs.map((c, i) => (
            <div key={i} className="cert-item">
              <div className={`cert-icon cert-icon--${c.cls}`}>{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}