import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/digital.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-inner">

            <p className="about-label">
              01 — ABOUT US
            </p>

            <h1>
              We build
              <span>digital futures.</span>
            </h1>

            <p className="about-intro">
              We are a digital agency focused on creating meaningful brands,
              modern websites, and digital experiences that make an impact.
            </p>

          </div>
        </section>


        {/* Story */}
        <section className="about-story">

          <div className="about-image">
            <img
              src={image}
              alt="Our digital agency"
            />
          </div>

          <div className="about-story-content">

            <p className="section-label">
              OUR STORY
            </p>

            <h2>
              Creativity meets
              <span>technology.</span>
            </h2>

            <p>
              We believe great digital products are created when strategy,
              creativity and technology work together.
            </p>

            <p>
              Our team works closely with businesses to understand their
              goals, create powerful ideas and turn those ideas into
              digital experiences people remember.
            </p>

          </div>

        </section>


        {/* Values */}
        <section className="about-values">

          <div className="values-heading">

            <p className="section-label">
              OUR VALUES
            </p>

            <h2>
              What drives
              <span>our work.</span>
            </h2>

          </div>


          <div className="values-list">

            <div className="value-item">

              <span>01</span>

              <div>
                <h3>Creativity</h3>

                <p>
                  We look for fresh ideas and creative solutions that make
                  every project unique.
                </p>
              </div>

            </div>


            <div className="value-item">

              <span>02</span>

              <div>
                <h3>Quality</h3>

                <p>
                  We care about every detail and build experiences that are
                  reliable, polished and purposeful.
                </p>
              </div>

            </div>


            <div className="value-item">

              <span>03</span>

              <div>
                <h3>Innovation</h3>

                <p>
                  We use modern technologies and new ideas to keep our
                  solutions ahead of the curve.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="about-cta">

          <p className="section-label">
            LET'S WORK TOGETHER
          </p>

          <h2>
            Have an idea?
            <span>Let's build it.</span>
          </h2>

          <Link
            to="/projects"
            className="about-cta-button"
          >
            Start a project ↗
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}