const plans = [
  {
    name: 'Free',
    amount: '$0',
    sup: false,
    period: 'forever',
    features: [
      'Full CO₂ tracking (all 4 categories)',
      'Daily habits & challenges',
      'Leaderboard & badges',
      'Personalized reduction tips',
      'Weekly trends & insights',
    ],
    locked: ['Ad-free experience', 'Premium analytics'],
    iap: 'No purchase required',
    best: false,
  },
  {
    name: 'Remove Ads',
    amount: '4.99',
    sup: true,
    period: 'one-time purchase',
    features: [
      'Full CO₂ tracking (all 4 categories)',
      'Daily habits & challenges',
      'Leaderboard & badges',
      'Personalized reduction tips',
      'Weekly trends & insights',
      'Ad-free experience',
    ],
    locked: ['Premium analytics'],
    iap: 'One-time in-app purchase',
    best: false,
  },
  {
    name: 'Premium',
    amount: '5.99',
    sup: true,
    period: 'per month · or $29.99 lifetime',
    features: [
      'Full CO₂ tracking (all 4 categories)',
      'Daily habits & challenges',
      'Leaderboard & badges',
      'Personalized reduction tips',
      'Weekly trends & insights',
      'Ad-free experience',
      'Premium analytics',
    ],
    locked: [],
    iap: 'In-app subscription · monthly or lifetime',
    best: true,
  },
];

export default function Pricing() {
  return (
    <section>
      <div className="center" data-animate>
        <div className="sec-lbl">Transparent pricing</div>
        <h2 className="sec-title">Start free. Go premium when you&apos;re ready.</h2>
        <p className="sec-sub">
          Every core feature is available for free. Upgrade to unlock an ad-free experience and premium insights.
        </p>
      </div>
      <div className="price-grid">
        {plans.map((plan, i) => (
          <div key={plan.name} className={`price-card${plan.best ? ' best' : ''}`} data-animate data-delay={`${i * 100}`}>
            {plan.best && <div className="price-best-tag">Most Popular</div>}
            <div className="price-name">{plan.name}</div>
            <div className="price-amt">
              {plan.sup && <sup>$</sup>}
              {plan.amount}
            </div>
            <div className="price-period">{plan.period}</div>
            <ul className="price-feats">
              {plan.features.map((f) => <li key={f}>{f}</li>)}
              {plan.locked.map((f) => <li key={f} className="off">{f}</li>)}
            </ul>
            <div className="price-iap">{plan.iap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
