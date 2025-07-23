import { useState } from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  let [Navbar, setNavbar] = useState(false)
  addEventListener("scroll", (e) => {
      let NavbarNum = window.scrollY
      if (NavbarNum > 10) {
          setNavbar(true)
          
      } else {
          setNavbar(false)
      }
  })

  const location = useLocation().pathname
  



  return (<>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary fixed-top transition ` + (Navbar ? "py-2" : "py-4")}>
      <div className="container">
        <a className="navbar-brand text-uppercase fs-2 fw-bold text-white" href="#">Start Framework</a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-uppercase fw-bold text-white ${location === "/about" ? "active" : ""}`} aria-current="page" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-uppercase fw-bold text-white ${location === "/portfolio" ? "active" : ""}`} to="portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-uppercase fw-bold text-white ${location === "/contact" ? "active" : ""}`} to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
