import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

const StyledCard = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  min-width: ${props => props.minWidth || '100%'};
  border-radius: 2px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.04);
  border: solid 1.5px ${props => props.colors.VERY_LIGHT_PINK || 'white'};
  background-color: #ffffff;
  padding: ${props => props.padding || '1em'};
`

export const Card = (props) => {
  return (
    <StyledCard colors={Colors} {...props} >
      {props.children}
    </StyledCard>
  )
}
