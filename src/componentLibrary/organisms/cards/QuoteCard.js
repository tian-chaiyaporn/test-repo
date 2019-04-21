import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { Card } from '../../atoms/card/Card'
import { TagLine } from '../../molecules/tagline/TagLine'

const StyledContent = styled.p`
  font-style: normal;
  margin: 0 auto;
  letter-spacing: normal;
  line-height: 1.33;
  font-size: 15px;
  color: ${props => props.color || 'darkgray'};
`

const StyledImage = styled.img`
  width: 50px;
  color: ${props => props.color.AQUA_MARINE || 'aquamarine'};
  object-fit: cover;
`

const MarginVertical = styled.div`
  margin:  ${props => props.margin || '10px 0'};
`

export const QuoteText = (props) => {
  const contentElement = props.content
    ? (<StyledContent color={Colors.BLACK}>{props.content}</StyledContent>)
    : null

  return (
    <MarginVertical>
      {contentElement}
    </MarginVertical>
  )
}

export const QuoteCard = (props) => {
  const {
    content = '',
    tagTitle = '',
    tagContent = '',
  } = props
  return (
    <Card maxWidth='248px' minWidth='248px' height='296px' padding='1.5em 1em'>
      <StyledImage src="/assets/baseline-format_quote-24px.svg" alt="Quote" color={Colors}/>
      <MarginVertical margin={'15px 0'}>
        <QuoteText content={content}/>
      </MarginVertical>
      <TagLine style={{ fontSize: '13px' }} title={tagTitle} content={tagContent} />
    </Card>
  )
}
