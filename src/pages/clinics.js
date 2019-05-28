import React, { Fragment } from 'react'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'
import { ClinicLists } from '../features/clinics/list/ClinicLists'

export default () => (
	<Fragment>
		<Header />
		<ClinicLists />
		<Footer />
	</Fragment>
)
