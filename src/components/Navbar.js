import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="container">

      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Oliver Read
        </Link>

        <div class="navbar-burger" data-target="nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="nav-menu" className="navbar-menu">

        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>
        </div>

        <div className="navbar-end">
          <a
            className="navbar-item"
            href="https://github.com/ojread/oliverread.co.uk"
            target="_blank"
            title="GitHub repo"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i class="fab fa-github fa-2x"></i>
            </span>
          </a>
        </div>

      </div>
      
    </div>
  </nav>
)

export default Navbar
