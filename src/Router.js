import React from 'react'
import styled from 'styled-components'
import { Link, Router as R } from '@reach/router'
import { Colors } from './constants/Styles'

const Router = (props) => (
  <R type='hash' {...props}>
    {props.children}
  </R>
)

export { Link, Router }

export const BreadcrumbLink = (props) => (
  <StyledLink colors={Colors} {...props} />
)
export const StyledLink = styled(Link)`
  color: ${props => props.colors.BLACK || 'black'};
`;
