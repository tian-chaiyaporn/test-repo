import React, { Fragment } from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import { Colors } from '../../../constants/Styles'

const STAR_SVG = "M8.889.658L6.703 5.295 1.81 6.04c-.878.133-1.23 1.264-.593 1.912l3.54 3.607-.838 5.095c-.15.921.777 1.611 1.554 1.18L9.85 15.43l4.376 2.405c.777.428 1.705-.259 1.554-1.18l-.837-5.095 3.539-3.607c.636-.648.285-1.78-.593-1.912l-4.892-.746L10.811.658a1.052 1.052 0 0 0-1.922 0z"
const STAR_SVG_VIEWBOX = "0 0 19 18"

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
      svgIconViewBox={STAR_SVG_VIEWBOX}
      svgIconPath={STAR_SVG}
      {...props}
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
      { reviewCount ? <RatingCount colors={Colors}>{`(${reviewCount})`}</RatingCount> : null }
    </Fragment>
  )
}
