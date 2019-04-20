import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/Styles'

const CroppedDiv = styled.div`
  width: ${props => props.width || '74px'};
  height: ${props => props.height || '74px'};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-image: linear-gradient(
    135deg,
    ${props => props.gradientColorTop || 'aquamarine'},
    ${props => props.gradientColorBottom || 'aquamarine'}
  );
`

const Image = styled.img`
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
`

export const ImageCircle = (props) => {
  const imageSource = props.source || "https://via.placeholder.com/150"
  return (
    <CroppedDiv
      gradientColorTop={Colors.LIGHT_TEAL}
      gradientColorBottom={Colors.AQUA_MARINE}
    >
      <Image src={imageSource} alt={'profile'} />
    </CroppedDiv>
  )
}
