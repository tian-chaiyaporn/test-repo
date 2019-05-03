import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { SmallParagraph } from '../../../constants/BodyText'

const StyledContent = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  margin: 0 auto;
  letter-spacing: -0.1px;
  color: ${props => props.color || 'darkgray'};
`

const StyledTitle = styled(SmallParagraph)`
  font-family: 'AkagiProBook';
  margin: 0 auto;
  letter-spacing: -0.1px;
`

export const TagLineText = (props) => {
  const titleElement = props.title
    ? (<StyledTitle>{props.title}</StyledTitle>)
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
