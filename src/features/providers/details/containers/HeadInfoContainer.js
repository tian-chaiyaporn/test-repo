import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../componentLibrary/atoms/button/Button'
import { MEDIA, Colors } from '../../../../constants/Styles'
import { RegularParagraph } from '../../../../constants/BodyText'
import { StarWithRating } from '../../../../componentLibrary/atoms/stars/Star'
import { ThumbnailCircle } from '../../../../componentLibrary/atoms/image/ThumbnailCircle'

const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  padding: 50px 0;

  ${MEDIA.tablet`grid-template-columns: 1fr;`}
`

const Name = styled.h3`margin: 0;`
const Title = styled.h3`
  margin: 0;
  color: ${Colors.BROWN_GREY};
  font-familty: 'TisaThin';
  font-weight: 100;
`
const HeadInfoStyled = styled.div`
  padding: 0 20px;
  ${MEDIA.tablet`padding: 0;`}
` 

export const HeadInfoContainer = (props) => {
  return (
    <InfoContainer>
      <div>
        <ThumbnailCircle width={'150px'} height={'150px'} />
      </div>
      <HeadInfo>info</HeadInfo>
      <div style={{ background: 'red', width: '300px' }}>map</div>
    </InfoContainer>
  )
}

const StyledButton = styled(Button)`
  max-width: 250px;
  font-size: 18px;
  padding: 16px;
  margin-right: 20px;
`

const data = {
  name: 'Dr. Boonchai Thanyalakpark',
  title: 'Dermatologist',
  addressName: 'Bumrungrad International',
  addressDetails: '33 Sukhumvit Soi 3 Khlong Toei Nuea, Wattana Bangkok 10110',
  phoneNumber: '',
  appointmentLink: ''
}

const HeadInfo = (props) => {
  const {
    name = '',
    title = '',
    addressName = '',
    addressDetails = '',
    phoneNumber = '',
    appointmentLink = ''
  } = data || props
  return (
    <HeadInfoStyled>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <span>
        <StarWithRating rating={5} reviewCount={0} />
        <a style={{ marginLeft: '10px', textDecoration: 'underline' }} href="#reviews">read reviews</a>
      </span>
      <RegularParagraph>{addressName}</RegularParagraph>
      <RegularParagraph>{addressDetails}</RegularParagraph>
      <div style={{ display: 'flex' }}>
        <StyledButton text="Call Doctor Now" filled />
        <StyledButton text="Book Appointment" />
      </div>
    </HeadInfoStyled>
  )
}
