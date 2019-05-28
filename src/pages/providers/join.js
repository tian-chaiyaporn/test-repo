import React, { Fragment } from 'react'
import Header from '../../features/header/HeaderContainer.js'
import { Footer } from '../../features/footer/FooterContainer.js'
import { ProviderJoin } from '../../features/authentication/provider/ProviderSignUp'

export default () => (
	<Fragment>
		<Header />
    <ProviderJoin />
		<Footer />
  </Fragment>
)
