import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
     <Navbar />

      <main className="contact-page">

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">

            <p className="contact-label">
              04 — CONTACT US
            </p>

            <h1>
              Let's create
              <span>something great.</span>
            </h1>

            <p className="contact-intro">
              Have a project, an idea, or just want to talk?
              Tell us what you're thinking. We'd love to hear from you.
            </p>

          </div>
        </section>


        {/* Contact Content */}
        <section className="contact-content">

          {/* Left */}
          <div className="contact-info">

            <p className="contact-section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's talk
              <span>about your idea.</span>
            </h2>

            <div className="contact-details">

              <div className="contact-detail">
                <span>Email</span>

                <a href="mailto:hello@youragency.com">
                  hello@youragency.com
                </a>
              </div>

              <div className="contact-detail">
                <span>Phone</span>

                <a href="tel:+94770000000">
                  +94 77 000 0000
                </a>
              </div>

              <div className="contact-detail">
                <span>Location</span>

                <p>Sri Lanka</p>
              </div>

            </div>

          </div>


          {/* Right - Form */}
          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="form-field">
                <label>Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>


              <div className="form-field">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="your@email.com"
                />
              </div>


              <div className="form-field">
                <label>Project Type</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="web-design">
                    Web Design
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="branding">
                    Branding
                  </option>

                  <option value="digital-strategy">
                    Digital Strategy
                  </option>
                </select>
              </div>


              <div className="form-field">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>


              <button type="submit" className="contact-submit">
                Send Message
                <span>↗</span>
              </button>

            </form>

          </div>

        </section>


        {/* Social */}
        <section className="contact-social">

          <p>FOLLOW US</p>

          <div className="social-links">

            <a href="#">
              Instagram ↗
            </a>

            <a href="#">
              Facebook ↗
            </a>

            <a href="#">
              LinkedIn ↗
            </a>

            <a href="#">
              Behance ↗
            </a>

          </div>

        </section>


        {/* Back Home */}
        <section className="contact-bottom">

          <Link to="/" className="back-home">
            ← Back to home
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}