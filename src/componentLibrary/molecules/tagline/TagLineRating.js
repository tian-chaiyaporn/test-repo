import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { ThumbnailCircle } from '../../atoms/image/ThumbnailCircle'
import { TagLineText } from './TagLineText'
import { StarWithRating } from '../../atoms/stars/Star'

const ComponentContainer = styled.div`
  display: flex;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  background-color: transparent;
`

const ContentContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  align-self: center;
`

const RatingContainer = styled.div`
  margin-top: 4px;
`

export const TagLineRating = (props) => {
  const {
    title,
    content,
    source,
    rating = 0,
    reviewCount = 0
  } = props
  return (
    <ComponentContainer colors={Colors} {...props} >
      <ThumbnailCircle
        source={source}
        width='65px'
        height='65px'
        padding='2em'
      />
      <ContentContainer>
        <TagLineText title={title} content={content} />
        <RatingContainer>
          <StarWithRating
            rating={rating}
            reviewCount={reviewCount}
            onChange={null}
          />
        </RatingContainer>
      </ContentContainer>
    </ComponentContainer>
  )
}
