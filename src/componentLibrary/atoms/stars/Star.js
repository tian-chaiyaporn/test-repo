import React, { Fragment } from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { Colors } from '../../../constants/Styles'

const RatingCount = styled.span`
  margin-left: 5px;
  font-size: 0.8em;
  color: ${props => props.colors.BROWN_GREY || 'grey'};
  line-height: 1.29;
  letter-spacing: -0.3px;
`

export const Star = (props) => {
  const { onChange = () => {} } = props
  return (
    <StarRatings
      changeRating={onChange}
      starDimension={'20px'}
      starSpacing={'1px'}
      starHoverColor={Colors.AQUA_MARINE}
      starRatedColor={Colors.AQUA_MARINE}
      {...props}
      // svgIconPath={"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"}
    />
  )
}

export const StarWithRating = (props) => {
  const {
    rating = 0,
    reviewCount = 0
  } = props
  return (
    <Fragment>
      <Star rating={rating} onChange={null} />
      <RatingCount colors={Colors}>{`(${reviewCount})`}</RatingCount>
    </Fragment>
  )
}
