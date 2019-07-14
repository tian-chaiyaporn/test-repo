import React, { Fragment } from 'react'
import { Header } from '../../features/header/Header.js'
import { Footer } from '../../features/footer/FooterContainer.js'
import { ProviderDetails } from '../../features/providers/details/ProviderDetails'

export default () => (
	<Fragment>
		<Header />
		<div style={{ maxWidth: "1400px", margin: '0 auto', padding: '0 5%' }}>
			<ProviderDetails />
		</div>
		<Footer />
	</Fragment>
)
