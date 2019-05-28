import React from 'react'
import styled from 'styled-components'
import { Colors, MEDIA } from '../../../constants/Styles'
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
  width: 30px;
  color: ${props => props.color.AQUA_MARINE || 'turquoise'};
  object-fit: cover;
  margin-top: 20px;

  ${MEDIA.phone`margin-top: 5px;`}
`

const MarginVertical = styled.div`
  margin:  ${props => props.margin || '10px 0'};
`

const StyledCard = styled(Card)`
  height: auto;

  ${MEDIA.phone`
    ${'' /* max-width: 327px; */}
    height: auto;
  `}
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
    <StyledCard minWidth='248px' height='296px' padding='1.5em 1em'>
      <StyledImage src="/assets/quote.svg" alt="Quote" color={Colors}/>
      <MarginVertical margin={'15px 0'}>
        <QuoteText content={content}/>
      </MarginVertical>
      <TagLine style={{ fontSize: '13px' }} title={tagTitle} content={tagContent} />
    </StyledCard>
  )
}
