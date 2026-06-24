const steps = [
  {
    n: 1,
    title: 'Set your baseline',
    desc: 'Answer a short questionnaire about your commute, diet, home, and shopping. EcoLoop calculates your personal CO₂ baseline instantly.',
  },
  {
    n: 2,
    title: 'Log your activities',
    desc: 'Add activities as you go — a car trip here, a meal there. The tracker is fast, intuitive, and built for real life.',
  },
  {
    n: 3,
    title: 'Watch your impact shrink',
    desc: 'See weekly trends, get personalized tips, complete habits and challenges, and watch your footprint fall over time.',
  },
];

export default function HowItWorks() {
  return (
    <section>
      <div className="hiw">
        <div className="center">
          <div className="sec-lbl">Simple by design</div>
          <h2 className="sec-title">Up and running in 3 minutes.</h2>
        </div>
        <div className="hiw-steps">
          {steps.map((s) => (
            <div key={s.n} className="hiw-step">
              <div className="hiw-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
