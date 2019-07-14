import React, { Fragment } from 'react'
import { Link } from '../../../Router.js'
import Sidebar from "react-sidebar";
import { StyledImage, TopBarOpen, CloseButton } from './HeaderStyledComponents'
import { BurgerButton } from './BurgerButton'
import { SideMenu } from './SideMenu'

export const BurgerMenu = (props) => (
  <Fragment>
    <TopBarOpen>
      <Link to="/">
        <StyledImage height={25} src="/assets/logo.svg" />
      </Link>
      <CloseButton onClick={() => props.toggleMenu(true)}>
        <BurgerButton />
      </CloseButton>
    </TopBarOpen>
    <Sidebar
      sidebar={<SideMenu onClose={() => props.toggleMenu(false)} />}
      open={props.isOpen}
      styles={{ sidebar: { background: "white", width: '100%' } }}
      pullRight={true}
    >
      <Fragment></Fragment>
    </Sidebar>
  </Fragment>
)
