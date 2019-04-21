import React from 'react'
import StarRatings from 'react-star-ratings';
import { Colors } from '../../../constants/Styles'

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
