import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <div className="hero-inner">
          <p className="hero-label">DIGITAL AGENCY</p>

          <h1>
            Welcome to Our
            <span>Digital Agency</span>
          </h1>

          <p className="hero-description">
            We create modern digital experiences that help brands grow,
            connect, and stand out.
          </p>
        </div>
      </div>
    </section>
  );
}