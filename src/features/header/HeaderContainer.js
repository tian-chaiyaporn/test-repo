import React from 'react'
import styled from 'styled-components'
import { Link } from '../../Router.js'
import { Colors } from '../../constants/Styles'

const MenuStyled = styled.nav`
  width: 100%;
  background-color: transparent;
  ${'' /* position: absolute; */}
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  padding: 0 30px;
`

const StyledLink = styled(Link)`
  color: ${Colors.BLACK};
  font-size: 16px;
  margin-left: 30px;
`

const StyledImage = styled.img`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding || '0'};
`

export default () => (
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
