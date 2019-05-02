import React from 'react'
import styled from 'styled-components'
import { SmallParagraph } from '../../../../constants/BodyText'
import { Colors } from '../../../../constants/Styles'
import { StarWithRating } from '../../../../componentLibrary/atoms/stars/Star'

const Header4 = styled.h4`margin: 10px 0;`
const Header5 = styled.h5`margin: 0 10px;`

const Text = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  color: ${Colors.BROWNISH_GREY};
  max-width: 600px;
  margin: 0;
`

const Rating = styled.div`display: flex;`
const RatingContainer = styled.div`padding: 25px 0`

export const PatientReviewInfo = (props) => {
  const {
    overallRating = 0,
    waitTimeRating = 0,
    bedsideMannerRating = 0
  } = props
  return (
    <section>
      <Header4>Patient reviews</Header4>
      <Text>All reviews have been submitted by patients after seeing the provider.</Text>
      <Text>For more information, check out our Patient Knowledge Base.</Text>
      <RatingContainer>
        <Rating>
          <StarWithRating rating={overallRating} reviewCount={0} />
          <Header5>Overall</Header5>
        </Rating>
        <Rating>
          <StarWithRating rating={waitTimeRating} reviewCount={0} />
          <Header5>Wait time</Header5>
        </Rating>
        <Rating>
          <StarWithRating rating={bedsideMannerRating} reviewCount={0} />
          <Header5>Bedside manner</Header5>
        </Rating>
      </RatingContainer>
    </section>
  )
}
