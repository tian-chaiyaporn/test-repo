import React from 'react'
import { Home } from '../features/home/Home'
import { HomeHeader } from '../features/header/Header.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default () => (
  <div>
		<HomeHeader />
		<Home />
		<Footer />
  </div>
)
