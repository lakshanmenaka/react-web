import "./OurServices.css";

export default function OurServices() {
  const services = [
    {
      number: "01",
      title: "Web Design",
      description:
        "Modern, clean and user-focused website designs that represent your brand.",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "Fast, responsive and scalable websites built with modern technologies.",
    },
    {
      number: "03",
      title: "Branding",
      description:
        "Strong visual identities that make your brand memorable and unique.",
    },
    {
      number: "04",
      title: "Digital Strategy",
      description:
        "Smart digital strategies that help your business grow and reach more people.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

       
        <div className="services-heading">
          <div className="services-label">
            <span>02</span>
            <p>OUR SERVICES</p>
          </div>

          <div className="services-title">
            <h2>
              What we
              <span>do best.</span>
            </h2>

            <p>
              We combine creativity, technology and strategy to create
              digital experiences that move businesses forward.
            </p>
          </div>
        </div>

        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}