import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

const CroppedDiv = styled.div`
  min-width: ${props => props.width || '74px'};
  min-height: ${props => props.height || '74px'};
  width: ${props => props.width || '74px'};
  height: ${props => props.height || '74px'};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-image: linear-gradient(
    135deg,
    ${props => props.gradientColorTop || 'turquoise'},
    ${props => props.gradientColorBottom || 'turquoise'}
  );
`

const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`

export const ThumbnailCircle = (props) => {
  const imageSource = props.source || "http://placekitten.com/g/150/150"
  return (
    <CroppedDiv
      gradientColorTop={Colors.LIGHT_TEAL}
      gradientColorBottom={Colors.AQUA_MARINE}
      {...props}
    >
      <Image src={imageSource} alt={'profile'} />
    </CroppedDiv>
  )
}
