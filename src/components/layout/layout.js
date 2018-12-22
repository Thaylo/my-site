import React, { Fragment } from 'react'
import Header from '../header'
import Footer from '../footer'
import siteConfig from '../../../data/siteConfig'

import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from '../commons'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <GlobalStyle />
        <Header headerLinks={siteConfig.headerLinks} />
        <div>{children}</div>
        <Footer siteConfig={siteConfig} />
      </Fragment>
    )
  }
}

export default Template
