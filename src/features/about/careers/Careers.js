import React from 'react'
import styled from 'styled-components'
import { MEDIA } from '../../../constants/Styles'
import { LargeParagraph } from '../../../constants/BodyText'
import { JobOpeningsContainer } from './containers/JobOpeningsContainer' 
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'

const CareersContainer = styled.div`padding: 50px 0;`
const CareerBodyText = styled(LargeParagraph)`font-family: 'AkagiProExtraLight';`
const SectionContainer = styled.section`padding: 10px 0;`
const PerksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  max-width: 800px;
  ${MEDIA.phone`grid-template-columns: repeat(1, 1fr);`}
`
const PerkItem = styled(CareerBodyText)`
  padding: 0;
  margin: 7px 0;
`

const JoinUs = () => (
  <SectionContainer>
    <MainHeadings
      title='Join Us'
      subtitle='And help transform healthcare for everyone.'
    />
    <CareerBodyText>{intro}</CareerBodyText>
    <CareerBodyText>{intro2}</CareerBodyText>
  </SectionContainer>
)

const Mission = () => (
  <SectionContainer>
    <h3>Our Mission</h3>
    <CareerBodyText>{mission}</CareerBodyText>
  </SectionContainer>
)

const Values = () => (
  <SectionContainer>
    <h3>Our values</h3>
    <CareerBodyText>{values}</CareerBodyText>
  </SectionContainer>
)

const Perks = () => (
  <SectionContainer>
    <h3>Our perks</h3>
    <PerksContainer>
      <PerkItem>100% paid health benefits</PerkItem>
      <PerkItem>Vacation and parental leave packages</PerkItem>
      <PerkItem>Lunch and snacks on us</PerkItem>
      <PerkItem>Cell phone reimbursement</PerkItem>
      <PerkItem>Gym discount</PerkItem>
      <PerkItem>Weekly yoga</PerkItem>
    </PerksContainer>
  </SectionContainer>
)

export const Careers = () => {
  return (
    <CareersContainer>
      <JoinUs />
      <Mission />
      <Values />
      <Perks />
      <SectionContainer>
        <JobOpeningsContainer />
      </SectionContainer>
    </CareersContainer>
  )
}

const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const intro2 = "Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum."
const mission = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const values = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
