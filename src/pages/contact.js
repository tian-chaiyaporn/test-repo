import React, { Fragment } from 'react'
import { Contact } from '../features/about/contact/Contact'
import { Footer } from '../features/footer/FooterContainer.js'
import Header from '../features/header/HeaderContainer.js'

export default () => (
	<Fragment>
		<Header />
		<div style={{ maxWidth: "1200px", margin: '0 auto', padding: '0 8%' }}>
			<Contact />
		</div>
		<Footer />
	</Fragment>
)
