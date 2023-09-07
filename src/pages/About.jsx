import React from 'react'

function About() {
  return (
    <>
        <section>
    <div
      id="about"
      className="about-area content section-divide bg-gray-black">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-sm-12 mb-30">
            <div className="about-img">
            </div>
          </div>
          <div className="col-12 col-lg-7 col-sm-12 mb-30">
            <div className="about-title">
              <span>About Me</span>
              <h2>Akshay V P </h2>
            </div>
            <div className="about-content">
              <p>
                Self taught developer with a strong foundation in MERN stack web development. Proficient in JavaScript, Node.js, React, and MongoDB. Proven ability to learn quickly and work well in a team. Passionate about creating user-friendly and visually appealing web applications
              </p>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-sm-12 extra-mb">
                <div className="about-bio">
                  <ul>
                    <li>
                      <p>
                        <span>Birthday:</span>02.08.1999
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Phone:</span>
                        <a href="tel:+770221770505">+91 9605547453</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Address:</span>Malappuram ,Kerala
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email:</span>
                        <a href="mailto:mail@gmail.com">
                          akshayvpdev@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-sm-12 extra-mb">
                <div className="about-bio">
                  <ul>
                    <li>
                      <p>
                        <span>Age:</span>24
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Study:</span>A P J Abdulkalam university
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Skype : </span>steve.Andrew:
                      </p>
                    </li>
                    {/* <li><p><span>Freelance:</span>Available</p></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-btns">
              <div className="about-btn">
                <a download={'Akshay.pdf'} href="/Akshay.pdf" className="btn btn-color btn-space">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tittle-warp">
              <h2>Photography &amp; Language Skills</h2>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="progress-bar-style">
              <div className="skillbar-group">
                <div className="single-skill-bar">
                  <div className="skill-bar-content">
                    <span className="skill-title tittle-bg">
                      Adventure
                    </span>
                  </div>
                  <div className="bar1 barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span
                      className="fill progress-bg"
                      data-percentage={90}
                    />
                  </div>
                </div>
                <div className="single-skill-bar">
                  <div className="skill-bar-content">
                    <span className="skill-title tittle-bg">Family</span>
                  </div>
                  <div className="bar2 barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span
                      className="fill progress-bg"
                      data-percentage={95}
                    />
                  </div>
                </div>
                <div className="single-skill-bar">
                  <div className="skill-bar-content">
                    <span className="skill-title tittle-bg">
                      Lifestyle
                    </span>
                  </div>
                  <div className="bar3 barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span
                      className="fill progress-bg"
                      data-percentage={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="progress-bar-style">
              <div className="single-skill-bar">
                <div className="skill-bar-content">
                  <span className="skill-title tittle-bg">English</span>
                </div>
                <div className="bar4 barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span
                    className="fill progress-bg"
                    data-percentage={90}
                  />
                </div>
              </div>
              <div className="single-skill-bar">
                <div className="skill-bar-content">
                  <span className="skill-title tittle-bg">Spanish</span>
                </div>
                <div className="bar5 barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span
                    className="fill progress-bg"
                    data-percentage={85}
                  />
                </div>
              </div>
              <div className="single-skill-bar">
                <div className="skill-bar-content">
                  <span className="skill-title tittle-bg">Hindi</span>
                </div>
                <div className="bar6 barfiller">
                  <div className="tipWrap">
                    <span className="tip" />
                  </div>
                  <span
                    className="fill progress-bg"
                    data-percentage={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tittle-warp extra-margin">
              <h2>Happy Client</h2>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-30">
            <div className="counter-wrapper text-center">
              <div className="counter-icon">
                <a href="">
                  <i className="la la-user-friends" />
                </a>
              </div>
              <div className="counter-text">
                <h2 className="counter">1520</h2>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-30">
            <div className="counter-wrapper text-center">
              <div className="counter-icon">
                <a href="">
                  <i className="las la-medal" />
                </a>
              </div>
              <div className="counter-text">
                <h2 className="counter">1250</h2>
                <span>Award Win</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mb-30">
            <div className="counter-wrapper text-center">
              <div className="counter-icon">
                <a href="">
                  <i className="las la-check-square" />
                </a>
              </div>
              <div className="counter-text">
                <h2 className="counter">1480</h2>
                <span>Complete Project</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tittle-warp">
              <h2>Our Partners</h2>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="brand-active mb-30 owl-carousel">
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b1.png" alt=''/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b2.png"  alt=''/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b3.png"  alt=''/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b4.png"  alt=''/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b2.png"  alt=''/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brand-wrapper">
                <div className="brand-img">
                  <div className="img">
                    <a href="">
                      <img src="img/brand/b3.png"  alt=''/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>

  )
}

export default About