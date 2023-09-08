import React from 'react'

function Portfolio() {
  return (
<section>
  <div id="portfolio" className="portfolio-area content section-divide bg-gray-black">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title w-90 text-left">
            <span>portfolio</span>
            <h2>My Works <img src="/assets/img/ti2.png" alt="" /></h2>
          </div>
        </div>
      </div>
      <div className="Portfolio-menu text-left mb-40">
        <button className="active" data-filter="*"><a href="https://example.com">All</a></button>
        <button data-filter=".cat1" className><a href="https://example.com">Youtube</a></button>
        <button data-filter=".cat2" className><a href="https://example.com">Mockup</a></button>
        <button data-filter=".cat3" className><a href="https://example.com">Photo</a></button>
        <button data-filter=".cat4" className><a href="https://example.com">Popup</a></button>
        <button data-filter=".cat5" className><a href="https://example.com">Other</a></button>				
      </div>
      <div className="Portfolio-grid grid filter custom">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat1">						
            <div className="Portfolio-wrapper mb-45">
              <div className="portfolio-img">								
                <a className="video-btn" data-type="iframe" href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"><img src="/assets/img/portfolio/1.jpg" alt="" /></a>
              </div>
              <div className="portfolio-content">
                <h2><a href="https://example.com">Personal videos</a></h2>	
                <span>youtube</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat2 cat5">
            <div className="Portfolio-wrapper mb-45">
              <div className="portfolio-img">	
                <a href="img/portfolio/2.jpg" className="popup-img">
                  <img src="/assets/img/portfolio/2.jpg" alt="" />
                </a>		
              </div>	
              <div className="portfolio-content">
                <h2><a href="https://example.com">Buisness Card</a></h2>	
                <span>mockup</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat5 cat2 cat3">
            <div className="Portfolio-wrapper mb-45">
              <div className="portfolio-img">	
                <a className="popup-img" href="img/portfolio/3.jpg"><img src="/assets/img/portfolio/3.jpg" alt="" /></a>	
              </div>								
              <div className="portfolio-content">
                <h2><a href="https://example.com">Ya Moda Flyer</a></h2>	
                <span>Photo</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat3 cat2">
            <div className="Portfolio-wrapper mb-45">
              <div className="portfolio-img">	
                <a className="popup-img" href="img/portfolio/4.jpg"><img src="/assets/img/portfolio/4.jpg" alt="" /></a>		
              </div>
              <div className="portfolio-content">
                <h2><a href="https://example.com">Hello I Am</a></h2>	
                <span>Photo</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat4">
            <div className="Portfolio-wrapper mb-30">
              <div className="portfolio-img">	
                <a data-toggle="modal" data-target="#portfolioModalone" href="https://example.com"><img src="/assets/img/portfolio/5.jpg" alt="" /></a>	
              </div>
              <div className="portfolio-content">
                <h2><a href="https://example.com">Waffle bookpack</a></h2>	
                <span>Popup</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 grid-item cat5 cat4">
            <div className="Portfolio-wrapper mb-30">
              <div className="portfolio-img">
                <a data-toggle="modal" data-target="#portfolioModaltwo" href="https://example.com"><img src="/assets/img/portfolio/6.jpg" alt="" /></a>										
              </div>
              <div className="portfolio-content">
                <h2><a href="https://example.com">Luiz Abdo</a></h2>	
                <span>Popup</span>
              </div>
            </div>
          </div>						
        </div>						
      </div>
    </div>
  </div>
</section>

  )
}

export default Portfolio