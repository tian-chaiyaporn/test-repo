import React, { Fragment } from 'react'
import { Story } from '../features/about/story/Story'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default () => (
	<Fragment>
		<Header />
		<div style={{ maxWidth: "920px", margin: '0 auto', padding: '0 8%' }}>
			<Story />
		</div>
		<Footer />
	</Fragment>
)
