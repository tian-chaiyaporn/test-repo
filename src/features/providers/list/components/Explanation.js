import React, { Fragment } from 'react'
import styled from 'styled-components'

const Description = styled.p`
  margin: 0;
  padding: 20px 0;
`

export const Explanation = (props) => {
  const {
    title = "Clinics in Bangkok",
    description = "With hundreds of Bangkok dermatologists to choose from, Wellglo can eliminate the guesswork and help you find professionals who participate in your insurance. Simply search the list of local physicians and check patient ratings and verified reviews to choose a dermatologist who can effectively treat warts, eczema, skin infections, or acne. Whether you're in Staten Island, Brooklyn, or any other borough, simply select an available appointment time to book a Bangkok dermatologist right away."
  } = props
  return (
    <Fragment>
      <h3>{title}</h3>
      <Description>{description}</Description>
    </Fragment>
  )
}
