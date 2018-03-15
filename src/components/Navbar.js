import React from 'react'
import Link from 'gatsby-link'

class Navbar extends React.Component {

  state = {
    showMobileMenu: false
  };

  toggleMenu() {
    this.setState(prevState => ({
      showMobileMenu: !prevState.showMobileMenu
    }));
  }

  render() {
    const showMobileMenu = this.state.showMobileMenu;

    return (
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="container">
    
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Oliver Read
            </Link>
    
            <div className={showMobileMenu ? 'navbar-burger is-active' : 'navbar-burger'} onClick={this.toggleMenu.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
    
          <div className={showMobileMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
    
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
                  <i className="fab fa-github fa-2x"></i>
                </span>
              </a>
            </div>
    
          </div>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
