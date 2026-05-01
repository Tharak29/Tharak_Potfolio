import { useEffect, useState } from 'react';

const NAME = 'Tharak Chakkiyath Mambally';
const ACCENTS = new Set(['T', 'C', 'M']);

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let count = 0;
    const iv = setInterval(() => {
      count = Math.min(count + Math.floor(Math.random() * 8) + 2, 100);
      setPct(count);
      if (count >= 100) clearInterval(iv);
    }, 2200 / 25);

    const hide = setTimeout(() => {
      setHidden(true);
      setTimeout(onDone, 800);
    }, 2600);

    return () => { clearInterval(iv); clearTimeout(hide); };
  }, [onDone]);

  return (
    <div className={`loader${hidden ? ' loader--hidden' : ''}`}>
      <div style={{ textAlign: 'center' }}>
        <div className="loader__name">
          {NAME.split('').map((ch, i) => {
            let delay = 0;
            for (let j = 0; j < i; j++) delay += NAME[j] === ' ' ? 0.04 : 0.045;
            return (
              <span
                key={i}
                className={`loader__char${ACCENTS.has(ch) ? ' loader__char--accent' : ''}`}
                style={{ animationDelay: `${delay}s` }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            );
          })}
        </div>
        <div className="loader__sub">Computer Science · SRM IST · 2023–27</div>
      </div>

      <div className="loader__dots">
        <span /><span /><span />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div className="loader__pct">{pct}%</div>
        <div className="loader__bar-wrap">
          <div className="loader__bar" />
        </div>
      </div>
    </div>
  );
}