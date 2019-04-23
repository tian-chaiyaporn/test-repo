import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

import { Card } from '../../atoms/card/Card'
import { TagLineText } from '../../molecules/tagline/TagLineText'
import { ThumbnailCircle } from '../../atoms/image/ThumbnailCircle'
import { StarWithRating } from '../../atoms/stars/Star'

const StyledTitle = styled.address`
  font-style: normal;
  margin: 0 auto;
  font-size: 16px;
  letter-spacing: -0.1px;
`

const StyledContent = styled.address`
  font-style: normal;
  margin: 0 auto;
  letter-spacing: -0.1px;
  font-size: 15px;
  color: ${props => props.color || 'darkgray'};
`

const MarginVertical = styled.div`
  margin:  ${props => props.margin || '10px 0'};
`

export const InfoText = (props) => {
  const contentElement = props.content
    ? (<StyledContent color={Colors.BROWNISH_GREY}>{props.content}</StyledContent>)
    : null

  return (
    <MarginVertical>
      <StyledTitle>{props.title}</StyledTitle>
      {contentElement}
    </MarginVertical>
  )
}

export const ProfileInfoCard = (props) => {
  const {
    imageSrc = "",
    addressName = '',
    addressDetail = '',
    tagTitle = '',
    tagContent = '',
    rating,
    reviewCount
  } = props
  return (
    <Card maxWidth='248px' minWidth='248px' height='320px' padding='1.5em 1em'>
      <ThumbnailCircle source={imageSrc} />
      <MarginVertical>
        <TagLineText
          style={{ fontSize: '13px' }}
          title={tagTitle}
          content={tagContent}
        />
      </MarginVertical>
      <StarWithRating rating={rating} reviewCount={reviewCount} />
      <MarginVertical margin={'15px 0'}>
        <InfoText title={addressName} content={addressDetail}/>
      </MarginVertical>
    </Card>
  )
}