import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Home | Gatsby + Netlify CMS"
    >
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    </Helmet>

    <Navbar />

    {/* <div className="columns">
      <div className="column is-three-quarters"> */}
        { children() }
      {/* </div>
      <div className="column">
        Sidebar
      </div>
    </div> */}

    {/* <Footer /> */}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
