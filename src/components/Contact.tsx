export default function Contact() {
  return (
    <section id="contact" className="contact-section123 contact-style-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="contact-form-wrapper">
              <form action="assets/php/contact.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" className="form-input" placeholder="Name" />
                      <i className="fa-solid fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" className="form-input" placeholder="Email" />
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input type="text" id="number" name="number" className="form-input" placeholder="Number" />
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" />
                      <i className="fa-solid fa-pen"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" className="form-input" placeholder="Message"></textarea>
                      <i className="fa-solid fa-message"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-button">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5 order-first order-lg-last">
            <div className="left-wrapper">
              <div className="section-title mb-40">
                <h3 className="mb-15">Get in touch</h3>
                <p>Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text">
                      <p>0045939863784</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="text">
                      <p>yourmail@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                      <p>John's House, 13/5 Road, Sidny United State Of America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="clients-logo-section pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="client-logo wow fadeInUp" data-wow-delay=".2s">
                <img src="img/clients/brands.svg" alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= clients-logo end ========================= --> */}

      {/* <!-- ========================= footer style-1 start ========================= --> */}
      <footer className="footer footer-style-1">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                  <div className="logo">
                    <a href="#0"> <img src="img/logo/logo.svg" alt="" className="logo"/> </a>
                  </div>
                  <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis nulla placerat amet amet congue.</p>
                  <ul className="socials">
                    <li> <a href="#0"> <i className="fa-brands fa-facebook"></i> </a> </li>
                    <li> <a href="#0"> <i className="fa-brands fa-twitter"></i> </a> </li>
                    <li> <a href="#0"> <i className="fa-brands fa-instagram"></i> </a> </li>
                    <li> <a href="#0"> <i className="fa-brands fa-linkedin"></i> </a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".3s">
                  <h6 className="a1">Quick Link</h6>
                  <ul className="links">
                    <li> <a href="#0">Home</a> </li>
                    <li> <a href="#0">About</a> </li>
                    <li> <a href="#0">Service</a> </li>
                    <li> <a href="#0">Contact</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                  <h6 className="a1">Services</h6>
                  <ul className="links">
                    <li> <a href="#0">Web Design</a> </li>
                    <li> <a href="#0">Web Development</a> </li>
                    <li> <a href="#0">Seo Optimization</a> </li>
                    <li> <a href="#0">Blog Writing</a> </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".5s">
                  <h6 className="a1">Help & Support</h6>
                  <ul className="links">
                    <li> <a href="#0">Support Center</a> </li>
                    <li> <a href="#0">Live Chat</a> </li>
                    <li> <a href="#0">FAQ</a> </li>
                    <li> <a href="#0">Terms & Conditions</a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrapper wow fadeInUp" data-wow-delay=".2s">
            <p>Design and Developed by <a href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a> Built-with <a href="#">Lindy UI Kit</a>. Distibuted by <a href="https://themewagon.com" target="_blank">ThemeWagon</a></p>
          </div>
        </div>
        <a href="#" className="scroll-top"> <i className="lni lni-chevron-up"></i> </a>
      </footer>
      {/* <!-- ========================= footer style-1 end ========================= --> */}

      {/* <!-- ========================= scroll-top start ========================= --> */}
      
    </section>
  );
}