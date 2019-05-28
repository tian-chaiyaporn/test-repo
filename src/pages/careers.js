import React, { Fragment } from 'react'
import { Careers } from '../features/about/careers/Careers'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default () => (
  <Fragment>
		<Header />
    <img style={{ width: '100%' }} src="https://picsum.photos/1200/500" alt="people working" />
    <div style={{ maxWidth: "1200px", margin: '0 auto', padding: '0 8%' }}>
      <Careers />
    </div>
		<Footer />
  </Fragment>
)
