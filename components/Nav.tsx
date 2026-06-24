import Image from 'next/image';

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <Image
          src="/logo.png"
          alt="EcoLoop"
          width={36}
          height={36}
          className="nav-logo-img"
          priority
        />
        <span className="nav-logo-text">
          Eco<span>Loop</span>
        </span>
      </a>
      <div className="nav-badge">
        <div className="nav-dot" />
        <span>Coming soon to iOS &amp; Android</span>
      </div>
    </nav>
  );
}
