import React from "react";
import MotionLayout from "../components/AnimationWrapper";

function Blog() {
  return (
    <MotionLayout>
      <section>
        <div
          id="blog"
          className="blog-area content section-divide bg-gray-black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title w-90 text-left">
                  <span>News</span>
                  <h2>
                    My Blog <img src="img/ti2.png" alt="" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="blog-warp pb-30">
                  <div className="blog-img">
                    <a
                      data-toggle="modal"
                      data-target="#blogModalone"
                      href="https://example.com">
                      <img src="img/blog/1.jpg" alt="" />
                    </a>
                    <span>fushion</span>
                  </div>
                  <div className="blog-content">
                    <div className="des-img">
                      <img src="img/testi/t1.jpg" alt="" />
                      <h5>
                        <span>by</span>Kaiara Spencer
                      </h5>
                      <div className="des-date">
                        <span>07 Aug 2021</span>
                      </div>
                    </div>
                    <h4>
                      <a
                        data-toggle="modal"
                        data-target="#blogModalone"
                        href="https://example.com">
                        Build your website into design automatically to your
                        buisness simplicity
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, sed do eiusmod teminc ididunt
                      ut labore et dolore.Lorem ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
                mg
                <div className="blog-warp pb-30">
                  <div className="blog-img">
                    <a
                      data-toggle="modal"
                      data-target="#blogModalt=''wo"
                      href="https://example.com">
                      <img src="img/blog/2.jpg" alt="" />
                    </a>
                    <span>Creative</span>
                  </div>
                  <div className="blog-content">
                    <div className="des-img">
                      <img src="img/testi/t2.jpg" alt="" />
                      <h5>
                        <span>by</span>Michael Redux
                      </h5>
                      <div className="des-date">
                        <span>16 July 2021</span>
                      </div>
                    </div>
                    <h4>
                      <a
                        data-toggle="modal"
                        data-target="#blogModalt=''wo"
                        href="https://example.com">
                        Guide to proper idea simplicity web design and
                        development tools here
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, sed do eiusmod teminc ididunt
                      ut labore et dolore.Lorem ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="blog-warp pb-30">
                  <div className="blog-img">
                    <a
                      data-toggle="modal"
                      data-target="#blogModalt=''hree"
                      href="https://example.com">
                      <img src="img/blog/3.jpg" alt="" />
                    </a>
                    <span>Lifestyle</span>
                  </div>
                  <div className="blog-content">
                    <div className="des-img">
                      <img src="img/testi/t3.jpg" alt="" />
                      <h5>
                        <span>by</span>Corine Willis
                      </h5>
                      <div className="des-date">
                        <span>02 June 2021</span>
                      </div>
                    </div>
                    <h4>
                      <a
                        data-toggle="modal"
                        data-target="#blogModalt=''hree"
                        href="https://example.com">
                        Never give in except to convictions simplicity good
                        sense of people in company
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, sed do eiusmod teminc ididunt
                      ut labore et dolore.Lorem ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-30">
                <div className="blog-warp pb-30">
                  <div className="blog-img">
                    <a
                      data-toggle="modal"
                      data-target="#blogModalfour"
                      href="https://example.com">
                      <img src="img/blog/4.jpg" alt="" />
                    </a>
                    <span>Concept</span>
                  </div>
                  <div className="blog-content">
                    <div className="des-img">
                      <img src="img/testi/t2.jpg" alt="" />
                      <h5>
                        <span>by</span>Jimm Smith
                      </h5>
                      <div className="des-date">
                        <span>21 April 2021</span>
                      </div>
                    </div>
                    <h4>
                      <a
                        data-toggle="modal"
                        data-target="#blogModalfour"
                        href="https://example.com">
                        Gearing your company through simplicity an Innovative of
                        local strategy
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, sed do eiusmod teminc ididunt
                      ut labore et dolore.Lorem ipsum dolor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionLayout>
  );
}

export default Blog;
