import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Colors } from '../../../constants/Styles'

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${props => props.primaryColor || 'turquoise'};
  color: ${props => props.primaryColor || 'turquoise'};
  padding: ${props => props.padding || '1em 2em'};
  font-size: 20px;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  outline-style: none;

  ${props => props.filled &&
    css`
      background: ${props => props.primaryColor || 'turquoise'};
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

export const FormikButton = ({
  field,
  form: { setFieldValue },
  ...props
}) => {
  const [isClicked, setClick] = useState(false)
  return (
    <ButtonStyled
      onClick={() => {
        setClick(!isClicked)
        setFieldValue(field.name, !isClicked, false)
      }}
      type={'button'}
      primaryColor={Colors.AQUA_MARINE}
      filled={isClicked}
      {...props}
    >
      {props.text}
    </ButtonStyled>
  )
}
