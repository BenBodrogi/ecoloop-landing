const features = [
  { icon: '🚗', title: 'Transport', color: 'ft', desc: 'Track car trips, flights, public transit, and cycling. See exactly how your commute and travel choices stack up.' },
  { icon: '🥗', title: 'Diet',      color: 'fd', desc: 'Log meals and discover the carbon cost of what you eat. From plant-based wins to red meat trade-offs — all in one place.' },
  { icon: '⚡', title: 'Energy',   color: 'fe', desc: 'Monitor home energy use including heating, cooling, and appliances. Find quick wins to lower your home\'s footprint.' },
  { icon: '🛍️', title: 'Purchases', color: 'fp', desc: 'Every online order and new item has a carbon cost. Track your shopping habits and make smarter choices.' },
  { icon: '✅', title: 'Daily Habits', color: 'fh', desc: 'Build an eco-conscious routine with personalized daily habits. Check them off and earn points as you go green, one day at a time.' },
  { icon: '🎯', title: 'Challenges',  color: 'fc', desc: 'Take on weekly and monthly sustainability challenges. Push your limits, earn badges, and keep motivation high.' },
];

export default function Features() {
  return (
    <section>
      <div className="sec-lbl" data-animate>Track everything that matters</div>
      <h2 className="sec-title" data-animate data-delay="100">Every CO₂ source, covered.</h2>
      <p className="sec-sub" data-animate data-delay="180">
        Log your activities in seconds across the four areas that make up most of your personal carbon footprint.
      </p>
      <div className="feat-grid">
        {features.map((f, i) => (
          <div key={f.title} className="feat-card" data-animate data-delay={`${i * 80}`}>
            <div className={`feat-icon ${f.color}`}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
