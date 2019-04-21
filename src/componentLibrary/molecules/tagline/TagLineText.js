import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

const StyledContent = styled.p`
  margin: 0 auto;
  letter-spacing: -0.1px;
  color: ${props => props.color || 'darkgray'};
`

const StyledTitle = styled.p`
  margin: 0 auto;
  letter-spacing: -0.1px;
`

export const TagLineText = (props) => {
  const titleElement = props.title
    ? (<StyledTitle><strong>{props.title}</strong></StyledTitle>)
    : null

  const contentElement = props.content
    ? (<StyledContent color={Colors.BROWNISH_GREY}>{props.content}</StyledContent>)
    : null

  return (
    <Fragment>
      {titleElement}
      {contentElement}
    </Fragment>
  )
}
