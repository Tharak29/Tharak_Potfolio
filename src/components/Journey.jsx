import { useIntersection } from '../hooks/useIntersection'
import { journey } from '../data/portfolioData'

function TlItem({ item }) {
  const [ref, visible] = useIntersection()

  return (
    <div
      ref={ref}
      className={`tl-item${visible ? ' visible' : ''}`}
    >
      <div className={`tl-dot ${item.dotCls}`} />
      <div className="tl-date">{item.date}</div>
      <div className="tl-title">{item.title}</div>
      <div className="tl-org">{item.org}</div>
      <div className="tl-desc">{item.desc}</div>
      <div className="tl-tags">
        {item.tags.map((t, i) => (
          <span key={i} className={`tl-tag tl-tag--${t.cls}`}>
            {t.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Journey() {
  const [ref, visible] = useIntersection()

  return (
    <section id="journey" className="section section--dark">
      <div className="journey-wrap">

        <div
          ref={ref}
          className={`section-header reveal${visible ? ' visible' : ''}`}
        >
          <div className="s-eyebrow">My Story</div>
          <h2 className="s-title">The Journey So Far</h2>
          <p className="s-sub">
            Education, internships, and things I'm proud of.
          </p>
        </div>

        <div className="timeline">
          {journey.map((item, i) => (
            <TlItem key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}