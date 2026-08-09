import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span>YOUR</span>
              <strong>AGENCY</strong>
            </a>

            <p>
              We create digital experiences
              <br />
              that help brands move forward.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-title">NAVIGATION</span>

            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Us</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <span className="footer-title">GET IN TOUCH</span>

            <a href="mailto:hello@youragency.com">
              hello@youragency.com
            </a>

            <a href="tel:+94770000000">
              +94 77 000 0000
            </a>
          </div>

          {/* Social */}
          <div className="footer-column">
            <span className="footer-title">FOLLOW US</span>

            <a href="#">Instagram ↗</a>
            <a href="#">Facebook ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Behance ↗</a>
          </div>

        </div>

        {/* Big Text */}
        <div className="footer-big-text">
          LET'S CREATE.
        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 Your Agency. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

          <a href="#" className="back-top">
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}