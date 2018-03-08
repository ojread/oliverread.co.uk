import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Oliver Read"
    >
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Helmet>

    <Navbar />

    <Hero title="JAMstack development" subtitle="Jackanackanory" />
    
    { children() }

    {/* <Footer /> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
