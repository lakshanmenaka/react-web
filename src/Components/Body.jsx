import "./Body.css";
import projectimg from "../assets/digital.jpg"

export default function Body() {
  return (
    <section className="body">
      <div className="body-container">

        {/* Left - Image */}
        <div className="body-image">
          <img
            src={projectimg}
            alt="Our Digital Agency"
          />
        </div>

        {/* Right - Content */}
        <div className="body-content">
          <p className="body-label">01 — ABOUT US</p>

          <h2>
            We create
            <span>digital experiences.</span>
          </h2>

          <p className="body-description">
            We are a modern digital agency focused on creating powerful
            websites, brands, and digital experiences that help businesses
            grow and stand out.
          </p>

          <p className="body-description">
            From creative design to modern development, we turn ideas into
            meaningful digital experiences.
          </p>

          <a href="#projects" className="body-link">
            Explore our work
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}