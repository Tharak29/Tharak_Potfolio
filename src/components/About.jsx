import { useIntersection } from '../hooks/useIntersection';

const CARDS = [
  { emoji: '🎓', val: '9.51', valCls: true, lbl: 'Current CGPA' },
  { emoji: '🏆', val: '#1', valCls: true, lbl: 'Protothon 2025' },
  { emoji: '💼', val: '1', extra: 'intern', lbl: '@ Hexalytics · AI & Analytics' },
  { emoji: '📜', val: '6+', valCls: true, lbl: 'Certifications' },
];

export default function About() {
  const [ref, visible] = useIntersection();

  return (
    <section id="about" className="section section--dark">
      <div className="section-wrap">
        <div ref={ref} className={`about-layout reveal${visible ? ' visible' : ''}`}>
          <div className="about-text">
            <div className="section-header">
              <div className="s-eyebrow">About Me</div>
              <h2 className="s-title">I build things<br />that solve real problems</h2>
            </div>
            <p>
              Hey, I'm Tharak — a Computer Science student at <strong>SRM IST, Tiruchirappalli</strong>. I got into CS because I wanted to build things that make a difference, and that's still what drives me.
            </p>
            <p>
              My interest spans <strong>Machine Learning, Full Stack Development, and IoT</strong>. I find it genuinely exciting to combine these — like building an IoT irrigation system that reacts to real sensor data, or a web app that suggests which doctor you should see based on your symptoms.
            </p>
            <p>
              I interned at <strong>Hexalytics</strong> working on AI analytics for K–12 education — applying data visualization and ML to help make sense of student performance data. It was my first real look at how AI gets used in production.
            </p>
            <div className="about-note">
              <div className="about-note__icon">🏆</div>
              <div className="about-note__text">
                Won <strong>Protothon 2025</strong> — a 24-hour hackathon at SRM IST, Trichy. Built something functional under pressure and came out on top.
              </div>
            </div>
          </div>

          <div className="about-cards">
            {CARDS.map((c, i) => (
              <div key={i} className="a-card">
                <div className="a-card__emoji">{c.emoji}</div>
                <div className="a-card__val">
                  <span>{c.val}</span>
                  {c.extra && <span className="a-card__extra"> {c.extra}</span>}
                </div>
                <div className="a-card__lbl">{c.lbl}</div>
              </div>
            ))}
            <div className="a-card a-card--full">
              <div className="a-card__emoji">📍</div>
              <div>
                <div className="a-card__val" style={{ fontSize: '1.1rem' }}>SRM IST · Trichy</div>
                <div className="a-card__lbl">B.Tech CSE · Sept 2023 — 2027</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}