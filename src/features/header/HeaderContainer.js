import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from '../../Router.js'
import { Colors, MEDIA, WINDOW_SIZES } from '../../constants/Styles'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Sidebar from "react-sidebar";

const MenuStyled = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  padding: 0 30px;
`

const StyledImage = styled.img`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding || '0'};
`

const StyledLink = styled(Link)`
  color: ${Colors.BLACK};
  font-size: 16px;
  margin-left: 30px;

  ${MEDIA.phone`margin-left: 0px;`}
`

const SideMenuStyled = styled.nav`
  background: white;
  width: 100%;
  padding: 0 30px;
`

const ListItem = styled.li`
  list-style: none;
  padding: 10px 0;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK_2}
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`

const TopBarOpen = styled(TopBar)`padding: 30px 30px 0 30px;`

const CloseButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  z-index: 1;
`

const Line = styled.div`
  height: 2px;
  width: 25px;
  background: ${Colors.BLACK};
  margin-top: 7px;
`

const LineContainer = styled.div`
  height: 25px;
  width: 25px;
`

const BurgerButton = () => (<LineContainer><Line /><Line /></LineContainer>)

const FullMenu = () => (
  <MenuStyled>
    <Link to="/">
      <StyledImage src="/assets/logo.svg" />
    </Link>
    <div>
      <StyledLink to="/providers">Find a doctor</StyledLink>
      <StyledLink to="/clinics">Find a hospital/Clinic</StyledLink>
      <StyledLink to="/directory">Health A-Z</StyledLink>
      <StyledLink to="/articles">The Pulse</StyledLink>
      <StyledLink to="/">Sign In/Join</StyledLink>
    </div>
  </MenuStyled>
)

const SideMenu = (props) => (
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
      <ListItem><StyledLink onClick={props.onClose} to="/">Home</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/providers">Find a doctor</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/clinics">Find a hospital/Clinic</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/directory">Health A-Z</StyledLink></ListItem>
    </StyledList>
    <StyledList>
      <ListItem><StyledLink onClick={props.onClose} to="/about">About</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/careers">Careers</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/help">Help</StyledLink></ListItem>
    </StyledList>
    <StyledList>
      <ListItem><StyledLink onClick={props.onClose} to="/">Log In</StyledLink></ListItem>
      <ListItem><StyledLink onClick={props.onClose} to="/">Sign Up</StyledLink></ListItem>
    </StyledList>
  </SideMenuStyled>
)

const BurgerMenu = (props) => (
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

export default () => {
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)
  const [ isOpen, toggleMenu ] = useState(false)
  return  matches
    ? <FullMenu />
    : <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
}
