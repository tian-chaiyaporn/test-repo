import React, { Fragment } from 'react'
import { Directory } from '../features/articles/directory/Directory'
import { Header } from '../features/header/Header.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default () => (
	<Fragment>
		<Header />
		<div style={{ maxWidth: "1200px", margin: '0 auto', padding: '0 5%' }}>
			<Directory />
		</div>
		<Footer />
	</Fragment>
)
