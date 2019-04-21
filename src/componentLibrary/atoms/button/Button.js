import React from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../../../constants/Styles'

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${props => props.primaryColor || 'aquamarine'};
  color: ${props => props.primaryColor || 'aquamarine'};
  padding: ${props => props.padding || '1em 2em'};
  font-size: 20px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};

  ${props => props.filled &&
    css`
      background: ${props => props.primaryColor || 'aquamarine'};
      color: white;
    `
  }
`

export const Button = (props) => {
  return (
    <ButtonStyled
      type={'button'}
      primaryColor={Colors.AQUA_MARINE}
      {...props}
    >
      {props.text}
    </ButtonStyled>
  )
}
