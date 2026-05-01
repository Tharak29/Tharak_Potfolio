import { useIntersection } from '../hooks/useIntersection';

const LINKS = [
  { icon: '✉', cls: 'mail', label: 'Email', val: 'tharakcm@gmail.com', href: 'mailto:tharakcm@gmail.com' },
  { icon: '🔗', cls: 'li', label: 'LinkedIn', val: 'tharak-chakkiyath-mambally', href: 'https://linkedin.com/in/tharak-chakkiyath-mambally/' },
  { icon: '🐙', cls: 'gh', label: 'GitHub', val: '@Tharak29', href: 'https://github.com/Tharak29' },
  { icon: '📱', cls: 'ph', label: 'Phone', val: '+91 99466 18670', href: 'tel:9946618670' },
];

export default function Contact() {
  const [ref, visible] = useIntersection();

  return (
    <section id="contact" className="section section--alt">
      <div className="contact-wrap">
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <div className="contact-label">Contact</div>
          <div className="contact-heading">Let's work<br />together</div>
          <p className="contact-body">
            Looking for internships, collaborative projects, or just want to talk tech.
            My inbox is open — I try to reply within a day.
          </p>

          <div className="contact-grid">
            {LINKS.map((l, i) => (
              <a key={i} href={l.href} className="contact-item" target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <div className={`contact-icon contact-icon--${l.cls}`}>{l.icon}</div>
                <div>
                  <div className="contact-item__label">{l.label}</div>
                  <div className="contact-item__val">{l.val}</div>
                </div>
              </a>
            ))}
          </div>

          <a href="mailto:tharakcm@gmail.com" className="contact-cta">
            <span>✉</span> Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}