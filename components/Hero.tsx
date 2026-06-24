// import Image from 'next/image';
// Uncomment the import above and the <Image> tag below once you add your screenshot.

const AppleIcon = () => (
  <svg className="btn-store-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.46 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const PlayIcon = () => (
  <svg className="btn-store-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 010 2.594zM1.337.924a1.486 1.486 0 00-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 00-.946-.179l11.04 10.973zm0 2.067l-11.071 11c.299.04.612-.016.898-.179l13.287-7.522-3.114-3.299z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">🌱 Your personal sustainability companion</div>

      <h1>
        Track Your Carbon.<br />
        <em>Build Better</em> Habits.
      </h1>

      <p className="hero-sub">
        EcoLoop measures your CO₂ footprint across transport, diet, energy, and purchases —
        then guides you to reduce it through daily habits, challenges, and community.
      </p>

      {/* Store buttons — coming soon */}
      <div className="store-row">
        <div className="btn-store">
          <AppleIcon />
          <span className="btn-store-text">
            <span className="btn-store-label">Download on the</span>
            <span className="btn-store-name">App Store</span>
          </span>
          <span className="soon-pill">Coming Soon</span>
        </div>
        <div className="btn-store">
          <PlayIcon />
          <span className="btn-store-text">
            <span className="btn-store-label">Get it on</span>
            <span className="btn-store-name">Google Play</span>
          </span>
          <span className="soon-pill">Coming Soon</span>
        </div>
      </div>

      {/* Google Pixel-style phone mockup */}
      <div className="pixel-device">
        <div className="pixel-btn-power" />
        <div className="pixel-btn-vol" />
        <div className="pixel-outer">
          <div className="pixel-inner">
            <div className="pixel-punch" />
            <div className="pixel-gesture" />

            {/*
              SCREENSHOT SETUP:
              1. Place your screenshot at:  public/assets/phone-screenshot.png
              2. Uncomment the <Image> tag below
              3. Remove the <div className="pixel-fallback"> block below it
              4. Uncomment `import Image from 'next/image'` at the top of this file
            */}
            {/* <Image src="/assets/phone-screenshot.png" fill alt="EcoLoop app" className="pixel-screenshot" /> */}

            {/* Fallback dashboard — remove once screenshot is in place */}
            <div className="pixel-fallback">
              <div className="pf-hd">
                <div className="pf-greet">
                  <span>Good morning</span>
                  <strong>Alex 👋</strong>
                </div>
                <div className="pf-lv">Lv 7 — Eco Hero</div>
              </div>
              <div className="pf-card">
                <div className="pf-co2-lbl">This week&apos;s CO₂</div>
                <div className="pf-co2-val">
                  43.2 <span className="pf-co2-unit">kg</span>
                </div>
                <div className="pf-co2-sub">Your baseline was 67 kg</div>
                <div className="pf-badge">↓ 35.5% improvement</div>
              </div>
              <div className="pf-cats">
                <div className="pf-cat">
                  <div className="pf-cat-ic">🚗</div>
                  <div className="pf-cat-nm">Transport</div>
                  <div className="pf-cat-vl" style={{ color: '#3b82f6' }}>18.1 kg</div>
                </div>
                <div className="pf-cat">
                  <div className="pf-cat-ic">🥗</div>
                  <div className="pf-cat-nm">Diet</div>
                  <div className="pf-cat-vl" style={{ color: '#22c55e' }}>12.4 kg</div>
                </div>
                <div className="pf-cat">
                  <div className="pf-cat-ic">⚡</div>
                  <div className="pf-cat-nm">Energy</div>
                  <div className="pf-cat-vl" style={{ color: '#f59e0b' }}>8.9 kg</div>
                </div>
                <div className="pf-cat">
                  <div className="pf-cat-ic">🛍️</div>
                  <div className="pf-cat-nm">Purchases</div>
                  <div className="pf-cat-vl" style={{ color: '#a855f7' }}>3.8 kg</div>
                </div>
              </div>
              <div className="pf-tip">
                <strong>💡 Top tip</strong>
                Try cycling once a week — could cut your transport emissions by up to 15%.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-fade" />
    </section>
  );
}
