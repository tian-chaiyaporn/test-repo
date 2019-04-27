import React from 'react'
import styled from 'styled-components'

const HeadingThick = styled.h1`
  font-size: 56px;
  font-weight: 300;
  line-height: 1.18;
  letter-spacing: -2px;
  margin: 0;
`

const HeadingThin = styled.h1`
  font-size: 56px;
  font-weight: 100;
  line-height: 1.18;
  letter-spacing: -2px;
  margin: 0;
`

export const MainHeadings = (props) => (
  <div>
    <HeadingThick>{props.title}</HeadingThick>
    <HeadingThin>{props.subtitle}</HeadingThin>
  </div>
)
