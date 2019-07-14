import React, { useState } from 'react'
import { Link } from '../../Router.js'
import { WINDOW_SIZES } from '../../constants/Styles'
import { SmallSpan } from '../../constants/BodyText'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { MenuStyled, StyledImage, StyledLink } from './components/HeaderStyledComponents'
import { BurgerMenu } from './components/BurgerMenu'

const FullMenu = () => (
  <MenuStyled>
    <Link to="/">
      <StyledImage height={25} src="/assets/logo.svg" />
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

const HomeMenu = () => (
  <MenuStyled style={{ position: 'absolute' }}>
    <Link to="/">
      <StyledImage height={25} src="/assets/logo-white.svg" />
    </Link>
    <div>
      <StyledLink to="/providers"><SmallSpan style={{ color: 'white' }}>Find a doctor</SmallSpan></StyledLink>
      <StyledLink to="/clinics"><SmallSpan style={{ color: 'white' }}>Find a hospital/Clinic</SmallSpan></StyledLink>
      <StyledLink to="/directory"><SmallSpan style={{ color: 'white' }}>Health A-Z</SmallSpan></StyledLink>
      <StyledLink to="/articles"><SmallSpan style={{ color: 'white' }}>The Pulse</SmallSpan></StyledLink>
      <StyledLink to="/"><SmallSpan style={{ color: 'white' }}>Sign In/Join</SmallSpan></StyledLink>
    </div>
  </MenuStyled>
)

const WhiteHeaderContainer = () => (
  <MenuStyled style={{ position: 'absolute' }}>
    <Link to="/">
      <StyledImage height={25} src="/assets/logo-white.svg" />
    </Link>
    <div>
      <StyledLink to="/about"><SmallSpan style={{ color: 'white' }}>What is Wellglo</SmallSpan></StyledLink>
      <StyledLink to="/about"><SmallSpan style={{ color: 'white' }}>Why join?</SmallSpan></StyledLink>
      <StyledLink to="/about"><SmallSpan style={{ color: 'white' }}>How does it work?</SmallSpan></StyledLink>
      <StyledLink style={{ backgroundColor: 'rgb(0, 0, 0, 0.1)', padding: '10px 25px' }} to="/articles"><SmallSpan style={{ color: 'white' }}>List your practice on Wellglo</SmallSpan></StyledLink>
    </div>
  </MenuStyled>
)

export const Header = () => {
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)
  const [ isOpen, toggleMenu ] = useState(false)
  return  matches
    ? <FullMenu />
    : <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
}

export const WhiteHeader = () => {
	const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)
  const [ isOpen, toggleMenu ] = useState(false)
  return  matches
    ? <WhiteHeaderContainer />
    : <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
}

export const HomeHeader = () => {
	const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)
  const [ isOpen, toggleMenu ] = useState(false)
  return  matches
    ? <HomeMenu />
    : <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
}