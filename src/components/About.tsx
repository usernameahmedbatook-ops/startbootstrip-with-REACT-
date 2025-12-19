export default function About() {
  return (
    <section id="about" className="about-section about-style-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image wow fadeInLeft" data-wow-delay=".2s">
              <img src="img/about/about-3/about-img.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-wrapper">
              <div className="section-title mb-40">
                <h3 className="mb-251 wow fadeInUp" data-wow-delay=".2s">The future of designing starts here</h3>
                <p className="wow fadeInUp" data-wow-delay=".4s">Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed.</p>
              </div>
              <div className="counter-up-wrapper mb-40 wow fadeInUp" data-wow-delay=".6s">
                <div className="single-counter">
                  <h4 className="countup" id="secondo1" cup-end="123" cup-append="M">123 M</h4>
                  <h6>Happy Client</h6>
                </div>
                <div className="single-counter">
                  <h4 className="countup" id="secondo2" cup-end="1434" cup-append="K">1434 K</h4>
                  <h6>Project Done</h6>
                </div>
                <div className="single-counter">
                  <h4 className="countup" id="secondo3" cup-end="134" cup-append="K">134 K</h4>
                  <h6>Award Win</h6>
                </div>
              </div>
              <button type="button" className="btn btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
}