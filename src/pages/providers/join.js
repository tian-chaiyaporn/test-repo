import React, { Fragment } from 'react'
import { WhiteHeader } from '../../features/header/Header.js'
import { Footer } from '../../features/footer/FooterContainer.js'
import { ProviderJoin } from '../../features/authentication/provider/ProviderSignUp'

export default () => (
	<Fragment>
		<WhiteHeader />
    <ProviderJoin />
		<Footer />
  </Fragment>
)
