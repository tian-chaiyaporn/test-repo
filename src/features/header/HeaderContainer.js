import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import { Link } from '../../Router.js'
import { Colors, MEDIA, WINDOW_SIZES } from '../../constants/Styles'
import { SmallSpan } from '../../constants/BodyText'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Sidebar from "react-sidebar";

const MenuStyled = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px 0;
  padding: 0 30px;
`

const StyledImage = styled.img`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding || '0'};
`

const StyledLink = styled(Link)`
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
      <StyledImage height={30} src="/assets/logo.svg" />
    </Link>
    <div>
      <StyledLink to="/providers"><SmallSpan>Find a doctor</SmallSpan></StyledLink>
      <StyledLink to="/clinics"><SmallSpan>Find a hospital/Clinic</SmallSpan></StyledLink>
      <StyledLink to="/directory"><SmallSpan>Health A-Z</SmallSpan></StyledLink>
      <StyledLink to="/articles"><SmallSpan>The Pulse</SmallSpan></StyledLink>
      <StyledLink to="/"><SmallSpan>Sign In/Join</SmallSpan></StyledLink>
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
