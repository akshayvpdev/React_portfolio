import React from 'react'

function Home() {
  return (

    <section>
    <div id="home" className="banner-area content active">
      <div
        className="banne-middle vh d-flex"
        style={{ backgroundImage: "url(img/bg2.jpg)" }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-md-12 text-center">
              <div className="banner-text">
                <h1>Akshay V P</h1>
                <h4>
                  {" "}
                  I'm a <span id="typed" />
                  Web developer
                </h4>
              </div>
              <div className="home-social d-none d-sm-block">
                <ul className="social list-unstyled m-0">
                  <li className="facebook">
                    <a title="Facebook" href="https://example.com">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a title="Twitter" href="https://example.com">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="linkedin">
                    <a title="Linkedin" href="https://example.com">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="dribbble">
                    <a title="Dribbble" href="https://example.com">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a title="Instagram" href="https://example.com">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Home