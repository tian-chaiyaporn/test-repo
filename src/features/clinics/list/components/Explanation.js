import React, { Fragment }  from 'react'
import styled from 'styled-components'
import { SmallParagraph } from '../../../../constants/BodyText'

const Title = styled.h4`margin: 20px 0`

const Description = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  margin: 0;
  padding: 0;
`

export const Explanation = (props) => {
  const {
    title = "Dermatologists in Bangkok",
    description = "With hundreds of Bangkok dermatologists to choose from, Wellglo can eliminate the guesswork and help you find professionals who participate in your insurance. Simply search the list of local physicians and check patient ratings and verified reviews to choose a dermatologist who can effectively treat warts, eczema, skin infections, or acne. Whether you're in Staten Island, Brooklyn, or any other borough, simply select an available appointment time to book a Bangkok dermatologist right away."
  } = props

  return ( 
    <Fragment>
      <Title>{title}</Title>
      <Description>{description}</Description> 
    </Fragment>      
  )
}
