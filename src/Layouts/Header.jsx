import React from 'react'


function Header() {
  const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
    { href: "portfolio", text: "Portfolio" },
    { href: "blog", text: "Blog" },
    { href: "contact", text: "Contact" },
  ]
  return (
    <header className="header-section">
    <div className="header-none fixed-top">
      <div id="header-sticky" className="demo-header small-menu menu-area">
        <div className="logo-text text-texture">
          <a href="#home">
            <h1>A</h1>
          </a>
        </div>
      </div>
      <div className="main-menu">
        <ul className="nav flex">
          {links.map((link,key) =>(
            <li key={key}>
              <div>
                <a   href={link.href}>
                  {link.text}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="copy-right">
        <p>@2021 Smith <br />Created By <a href="https://codecanyon.net/user/themexhunter">ThemexHunter</a>.</p>
      </div>
    </div>
    <nav role="navigation" className="d-block d-xl-none">
      <div id="menuToggle" className>
        <input type="checkbox" />
        <div className="mobile-menu mainmenu" id="mobile-menu">
          <ul id="nav">
            <li ><a href="/"><i className="las la-home" /></a></li>
            <li><a href="about"><i className="las la-address-book" /></a></li>
            <li><a href="portfolio"><i className="las la-briefcase" /></a></li>
            <li><a href="client"><i className="las la-exchange-alt" /></a></li>
            <li><a href="blog"><i className="las la-blog" /></a></li>
            <li><a href="contact"><i className="las la-comments" /></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>



  )
}

export default Header