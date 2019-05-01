import React from 'react'
import styled from 'styled-components'
import { SmallParagraph } from '../../../../constants/BodyText'
import { Colors } from '../../../../constants/Styles'
import { StarWithRating } from '../../../../componentLibrary/atoms/stars/Star'

const Header4 = styled.h4`margin: 10px 0;`
const Header5 = styled.h5`margin: 0 10px;`

const CustomText = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  color: ${Colors.BROWNISH_GREY};
  max-width: 600px;
  margin: 0;
`

export const PatientReviewInfo = (props) => {

  return (
    <div>
      <Header4>Patient reviews</Header4>
      <CustomText>All reviews have been submitted by patients after seeing the provider.</CustomText>
      <CustomText>For more information, check out our Patient Knowledge Base.</CustomText>
      <div style={{ padding: '25px 0' }}>
        <div style={{ display: 'flex' }}>
          <StarWithRating rating={5} reviewCount={0} />
          <Header5>Overall</Header5>
        </div>
        <div style={{ display: 'flex' }}>
          <StarWithRating rating={4} reviewCount={0} />
          <Header5>Wait time</Header5>
        </div>
        <div style={{ display: 'flex' }}>
          <StarWithRating rating={5} reviewCount={0} />
          <Header5>Bedside manner</Header5>
        </div>
      </div>
    </div>
  )
}
