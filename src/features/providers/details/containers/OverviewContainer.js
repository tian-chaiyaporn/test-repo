import React from 'react'
import styled from 'styled-components'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { WINDOW_SIZES, Colors } from '../../../../constants/Styles'
import { SmallParagraph } from '../../../../constants/BodyText'
import { Collapse } from '../../../../componentLibrary/atoms/collapse/Collapse'
import { ThumbnailCircle } from '../../../../componentLibrary/atoms/image/ThumbnailCircle'

const CustomCollapse = styled(Collapse)`
  font-family: 'TisaLight';
  font-size: 24px;
  padding: 16px 0;
  &:last-child { border-bottom: none; }
`

const CustomText = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  color: ${Colors.BROWNISH_GREY};
  padding-bottom: 16px;
`

const Header4 = styled.h4`margin: 5px 0;`

const data = { text: "Please note, Spring Street Dermatology has a 24 hour cancellation policy. Patients who cancel or reschedule with less than 24 hours notice may need to pay a cancellation fee. New patients are also required to come in 15 minutes prior to their scheduled appointment time to register into our system. Dr. Palep is a clinical instructor at Mount Sinai Department of Dermatology, where she donates her time to teach residents. In her private practice, she offers complete medical, surgical and cosmetic dermatology services." }

export const OverviewContainer = (props) => {
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.phone}px)`);
  return (
    <div style={{ padding: '20px 0' }}>
      <CustomCollapse title='Professional Statement' borderColor={Colors.VERY_LIGHT_PINK} open>
        <CustomText>{data.text}</CustomText>
        <Header4>Spoken Language</Header4>
        <CustomText>Thai, English</CustomText>
        <Header4>Payment Methods</Header4>
        <CustomText>Cash, Cheque and Credit Card.</CustomText>
        { matches ? <WellgloAward /> : null }
      </CustomCollapse>
      <CustomCollapse title='Specialities' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </CustomCollapse>
      <CustomCollapse title='Professional Experience' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </CustomCollapse>
      <CustomCollapse title='Education & Certificate' borderColor={Colors.VERY_LIGHT_PINK}>
        <p>1</p>
      </CustomCollapse>
      { matches ? null : <WellgloAwardMobile /> }
    </div>
  )
}

const WellgloAward = () => (
  <section>
    <Header4>Wellglo Awards</Header4>
    <CustomText>1</CustomText>
  </section>
)

const WellgloAwardMobile = () => (
  <section style={{ marginTop: '50px'}}>
    <Header4>Wellglo Awards</Header4>
    <Header4 style={{ color: Colors.BROWN_GREY }}>Duis porttitor mauris sed neque</Header4>
    <div style={{ display: 'flex', paddingTop: '30px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px'}}>
        <ThumbnailCircle width={'55px'} height={'55px'} />
        <CustomText>See you again</CustomText>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <ThumbnailCircle width={'55px'} height={'55px'} />
        <CustomText>See you again</CustomText>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <ThumbnailCircle width={'55px'} height={'55px'} />
        <CustomText>See you again</CustomText>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <ThumbnailCircle width={'55px'} height={'55px'} />
        <CustomText>See you again</CustomText>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 20px' }}>
        <ThumbnailCircle width={'55px'} height={'55px'} />
        <CustomText>See you again</CustomText>
      </div>
    </div>
  </section>
)
