import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

const HeadingThick = styled.h2`
  font-family: 'TisaLight';
  font-weight: 300;
  margin: 0;
`

const HeadingThin = styled.h2`
  font-weight: 100;
  margin: 0;
  color: ${Colors.BROWNISH_GREY};
`

export const MainHeadings = (props) => (
  <div {...props}>
    <HeadingThick>{props.title}</HeadingThick>
    <HeadingThin>{props.subtitle}</HeadingThin>
  </div>
)
