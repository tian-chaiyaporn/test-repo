import React, { Fragment } from 'react'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'
import { ProviderLists } from '../features/providers/list/ProviderLists'

export default () => (
	<Fragment>
		<Header />
  	<ProviderLists />
		<Footer />
	</Fragment>
)
