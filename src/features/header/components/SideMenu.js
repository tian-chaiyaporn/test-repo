import React from 'react'
import { Link } from '../../../Router.js'
import { SmallSpan } from '../../../constants/BodyText'
import {
	StyledImage,
	StyledLink,
	SideMenuStyled,
	ListItem,
	StyledList,
	TopBar,
	CloseButton
} from './HeaderStyledComponents'

export const SideMenu = (props) => (
  <SideMenuStyled>
    <TopBar>
      <Link to="/">
        <StyledImage height={25} src="/assets/logo.svg" />
      </Link>
      <CloseButton onClick={props.onClose}>
        <StyledImage src="/assets/close.svg" />
      </CloseButton>
    </TopBar>
    <StyledList>
      <ListItem><StyledLink onClick={props.onClose} to="/"><SmallSpan>Home</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/providers"><SmallSpan>Find a doctor</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/clinics"><SmallSpan>Find a hospital/Clinic</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/directory"><SmallSpan>Health A-Z</SmallSpan></StyledLink></ListItem>
    </StyledList>
    <StyledList>
      <ListItem><StyledLink onClick={props.onClose} to="/about"><SmallSpan>About</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/careers"><SmallSpan>Careers</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/help"><SmallSpan>Help</SmallSpan></StyledLink></ListItem>
    </StyledList>
    <StyledList>
      <ListItem><StyledLink onClick={props.onClose} to="/"><SmallSpan>Log In</SmallSpan></StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/"><SmallSpan>Sign Up</SmallSpan></StyledLink></ListItem>
    </StyledList>
  </SideMenuStyled>
)
