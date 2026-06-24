export default function Gamification() {
  return (
    <section>
      <div className="game-grid">
        {/* Visual cards column */}
        <div data-animate="left">
          <div className="g-card">
            <div className="g-lbl">Your badges</div>
            <div className="badges">
              {['🌱','🚲','⚡','🥗','🌍'].map((b) => (
                <div key={b} className="bdg bdg-on">{b}</div>
              ))}
              {['🏆','💎','🔥'].map((b) => (
                <div key={b} className="bdg bdg-off">{b}</div>
              ))}
            </div>
            <div className="xp">
              <div className="xp-row">
                <span>Level 7 — Eco Hero</span>
                <span>680 / 1000 XP</span>
              </div>
              <div className="xp-track" data-animate="xp">
                <div className="xp-fill" />
              </div>
            </div>
          </div>

          <div className="g-card">
            <div className="g-lbl">Leaderboard — this week</div>
            <div className="lb">
              <div className="lb-row">
                <span className="lb-rank g">1</span>
                <div className="lb-av" style={{ background: 'rgba(245,158,11,0.1)' }}>🌟</div>
                <span className="lb-name">Mia K.</span>
                <span className="lb-pts">2 840 pts</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank s">2</span>
                <div className="lb-av" style={{ background: 'rgba(148,163,184,0.1)' }}>🌿</div>
                <span className="lb-name">Luca M.</span>
                <span className="lb-pts">2 610 pts</span>
              </div>
              <div className="lb-row lb-me">
                <span className="lb-rank b">3</span>
                <div className="lb-av" style={{ background: 'rgba(94,204,130,0.1)' }}>😊</div>
                <span className="lb-name">You</span>
                <span className="lb-pts">2 390 pts</span>
                <span className="lb-you-tag">You</span>
              </div>
              <div className="lb-row">
                <span className="lb-rank">4</span>
                <div className="lb-av" style={{ background: 'rgba(168,85,247,0.1)' }}>🌏</div>
                <span className="lb-name">Sara P.</span>
                <span className="lb-pts">2 110 pts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div data-animate="right" data-delay="120">
          <div className="sec-lbl">Gamified sustainability</div>
          <h2 className="sec-title">Staying green has never been this fun.</h2>
          <p className="sec-sub" style={{ marginBottom: 0 }}>
            Earn points every time you log an activity, complete a habit, or finish a challenge.
            Level up, unlock badges, and compete on the leaderboard with your community.
          </p>
          <div className="g-stats">
            <div><div className="gstat-v">12+</div><div className="gstat-l">Badge types</div></div>
            <div><div className="gstat-v">20+</div><div className="gstat-l">Challenges</div></div>
            <div><div className="gstat-v">∞</div><div className="gstat-l">Levels to climb</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
