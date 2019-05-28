import React from 'react'
import { Home } from '../features/home/Home'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default () => (
  <div>
		<Header />
		<Home />
		<Footer />
  </div>
)
