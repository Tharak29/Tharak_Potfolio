export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <div className="hero__eyebrow">
            <div className="eyebrow-bar" />
            Available for Opportunities
          </div>

          <h1 className="hero__name">
            <span className="hero__first">Tharak</span>
            <span className="hero__last">Chakkiyath Mambally</span>
          </h1>

          <p className="hero__tagline">
            CS undergrad at <strong>SRM IST, Trichy</strong> who builds things that actually work —<br />
            from ML-powered web apps to IoT systems in the field.
          </p>

          <div className="hero__roles">
            <span className="role-pill role-pill--a">Machine Learning</span>
            <span className="role-pill role-pill--b">Full Stack Dev</span>
            <span className="role-pill role-pill--c">IoT & Hardware</span>
            <span className="role-pill">CGPA 9.51</span>
          </div>

          <div className="hero__cta">
            <a href="#projects" className="btn-main">
              <span>View Projects</span>
              <span style={{ fontSize: '0.8rem' }}>→</span>
            </a>
            <a href="mailto:tharakcm@gmail.com" className="btn-ghost">
              <span>✉</span>
              <span>Say Hello</span>
            </a>
          </div>

          <div className="hero__scroll">
            <div className="scroll-track"><div className="scroll-fill" /></div>
            <div className="scroll-text">Scroll to explore</div>
          </div>
        </div>

        <div className="hero__side">
          <div className="profile-card">
            <div className="profile-card__top">
              <div className="profile-avatar">TC</div>
              <div className="profile-name">Tharak C. Mambally</div>
              <div className="profile-role">CS Undergrad · SRM IST</div>
            </div>
            <div className="profile-card__body">
              <div className="profile-stats">
                {[['9.51','CGPA'],['3+','Projects'],['6+','Certs']].map(([v,l]) => (
                  <div key={l} className="p-stat">
                    <div className="p-stat__val">{v}</div>
                    <div className="p-stat__lbl">{l}</div>
                  </div>
                ))}
              </div>
              <div className="profile-skills">
                {[
                  { label: 'ML / AI', pct: '82%', cls: 'ml' },
                  { label: 'Full Stack', pct: '70%', cls: 'fs' },
                  { label: 'IoT / Hardware', pct: '75%', cls: 'iot' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="p-skill-label">
                      <span>{s.label}</span>
                      <span>{s.pct}</span>
                    </div>
                    <div className="p-bar">
                      <div className={`p-bar__fill p-bar__fill--${s.cls}`} style={{ width: s.pct }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="status-badge">
                <div className="status-dot" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}