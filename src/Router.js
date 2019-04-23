import React from 'react'
import styled from 'styled-components'
import { Link, Router } from '@reach/router'
import { Colors } from './constants/Styles'

export { Link, Router }

export const BreadcrumbLink = (props) => (
  <StyledLink colors={Colors} {...props} />
)
export const StyledLink = styled(Link)`
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  color: ${props => props.colors.BLACK || 'black'};
  font-size: 16px;
`;
