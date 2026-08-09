import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Brand Identity",
      category: "Branding",
      year: "2026",
    },
    {
      number: "02",
      title: "Digital Experience",
      category: "Web Design",
      year: "2026",
    },
    {
      number: "03",
      title: "Modern Platform",
      category: "Web Development",
      year: "2026",
    },
    {
      number: "04",
      title: "Business Website",
      category: "Digital Experience",
      year: "2026",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="projects-page">

        {/* Hero */}
        <section className="projects-hero">
          <div className="projects-hero-inner">

            <p className="projects-label">
              03 — PROJECTS
            </p>

            <h1>
              Selected
              <span>work.</span>
            </h1>

            <p className="projects-intro">
              A collection of digital experiences, brands and websites
              we've created for ambitious businesses.
            </p>

          </div>
        </section>


        {/* Projects */}
        <section className="projects-list-section">

          <div className="projects-list">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >

                {/* Image */}
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>{project.number}</span>
                  </div>
                </div>


                {/* Details */}
                <div className="project-details">

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-main">

                    <h2>
                      {project.title}
                    </h2>

                    <p>
                      {project.category}
                    </p>

                  </div>

                  <div className="project-meta">

                    <span>
                      {project.year}
                    </span>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* CTA */}
        <section className="projects-cta">

          <p>HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's create
            <span>something together.</span>
          </h2>

          <Link
            to="/contact"
            className="projects-cta-button"
          >
            Start a project ↗
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}