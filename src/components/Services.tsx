export default function Services() {
  const services = [
    {
      icon: "fa-brands fa-figma",
      title: "Graphics Design",
      description: "Short description for the ones who look for something new.",
      // delay: ".2s"
    },
    {
      icon: "fa-solid fa-palette",
      title: "UI/UX Design", 
      description: "Short description for the ones who look for something new.",
      // delay: ".4s"
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "Web Design",
      description: "Short description for the ones who look for something new.",
      // delay: ".6s"
    },
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description: "Short description for the ones who look for something new.",
      // delay: ".8s"
    }
  ];

  return (
    <section id="services" className="feature-section feature-style-2">
      <div className="container d-flex">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-9">
                <div className="section-title mb-60">
                  <h3 className="hd-3">The future of designing starts here</h3>
                  <p className="pr-2">Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
                </div>
              </div>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-md-6">
                  <div className="single-feature wow fadeInUp" data-wow-delay={service.delay}>
                    <div className="content">
                      <i className={service.icon} style={{ fontSize: '4rem' }}></i>
                      <h5 className="mb-25">{service.title}</h5>
                      <p className="pr-3">{service.description}</p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
 <img src="img/feature/feature-2-1.svg" className="img-2" />
      </div>
     
    </section>
    
  );
}