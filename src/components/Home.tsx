export default function Home() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hi">
              <h4 className="hd-1">You're Using</h4>
              <h2 className="hd-2">Free Lite Version of Template</h2>
              <p className="pr-1">Please, purchase full version of the template to get all sections, features and permission to remove footer credit</p>
              <div className="buttons">
                <button className="btn-1">Download Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img src="img/hero/hero-2/hero-img.svg" className="img-1" alt="Hero" />
              {/* <img src="img/hero/hero-2/paattern.svg" alt="Pattern" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}