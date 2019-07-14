import styled from 'styled-components'
import { Link } from '../../../Router.js'
import { Colors, MEDIA } from '../../../constants/Styles'

export const MenuStyled = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px 0;
  padding: 0 30px;
`

export const StyledImage = styled.img`
  height: ${props => props.height || '20px'};
  padding: ${props => props.padding || '0'};
`

export const StyledLink = styled(Link)`
  margin-left: 30px;
  ${MEDIA.phone`margin-left: 0px;`}
`

export const SideMenuStyled = styled.nav`
  background: white;
  width: 100%;
  padding: 0 30px;
`

export const ListItem = styled.li`
  list-style: none;
  padding: 10px 0;
`

export const StyledList = styled.ul`
  margin: 0;
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK_2}
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`

export const TopBarOpen = styled(TopBar)`padding: 30px 30px 0 30px;`

export const CloseButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  z-index: 1;
`

export const Line = styled.div`
  height: 2px;
  width: 25px;
  background: ${Colors.BLACK};
  margin-top: 7px;
`

export const LineContainer = styled.div`
  height: 25px;
  width: 25px;
`
