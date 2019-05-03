import React, { Fragment } from 'react'
import styled from 'styled-components'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Button } from '../../../../componentLibrary/atoms/button/Button'
import { MEDIA, WINDOW_SIZES, Colors } from '../../../../constants/Styles'
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
const StyledButton = styled(Button)`
  max-width: 250px;
  font-size: 16px;
  padding: 14px;
  margin-right: 20px;
  &:last-child { margin-right: 0px; }
  ${MEDIA.tablet` max-width: 100%; `}
`
const AddressBar = styled(RegularParagraph)`
  font-weight: 200;
  font-family: 'AkagiProLight';
  color: ${Colors.BROWN_GREY};
  margin: 0 0 15px 0;
`

export const HeadInfoContainer = (props) => {
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`);
  return (
    <InfoContainer>
      <div style={{ paddingBottom: '20px'}}>
        <ThumbnailCircle width={'150px'} height={'150px'} />
      </div>
      <HeadInfo>info</HeadInfo>
      { matches ? <MapView /> : null }
    </InfoContainer>
  )
}

const MapView = () => (
  <div style={{ background: 'red', width: '300px' }}>map</div>
)

const FullButtonGroup = () => (
  <div style={{ display: 'flex' }}>
    <StyledButton text="Call Doctor Now" filled />
    <StyledButton text="Book Appointment" />
  </div>
)

const MobileButtonGroup = () => (
  <Fragment>
    <div style={{ display: 'flex', paddingBottom: '20px' }}>
      <StyledButton text="View map" />
      <StyledButton text="Get direction" />
    </div>
    <StyledButton text="Call Doctor Now" filled />
  </Fragment>
)

const HeadInfo = (props) => {
  const {
    name = '',
    title = '',
    addressName = '',
    addressDetails = '',
    phoneNumber = '',
    appointmentLink = ''
  } = data || props

  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`);

  return (
    <HeadInfoStyled>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <span>
        <StarWithRating rating={5} reviewCount={0} />
        <a style={{ marginLeft: '10px', textDecoration: 'underline' }} href="#reviews">read reviews</a>
      </span>
      <RegularParagraph style={{ margin: '15px 0 0 0' }}>{addressName}</RegularParagraph>
      <AddressBar>{addressDetails}</AddressBar>
      { matches ?  <FullButtonGroup /> : <MobileButtonGroup /> }
    </HeadInfoStyled>
  )
}

const data = {
  name: 'Dr. Boonchai Thanyalakpark',
  title: 'Dermatologist',
  addressName: 'Bumrungrad International',
  addressDetails: '33 Sukhumvit Soi 3 Khlong Toei Nuea, Wattana Bangkok 10110',
  phoneNumber: '',
  appointmentLink: ''
}
