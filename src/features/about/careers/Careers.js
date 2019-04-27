import React from 'react'
import styled from 'styled-components'
import { MEDIA } from '../../../constants/Styles'
import { JobOpeningsContainer } from './containers/JobOpeningsContainer' 
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'

const CareersContainer = styled.div`
  padding: 50px 0;
`

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

const JoinUs = () => (
  <SectionContainer>
    <MainHeadings
      title='Join Us'
      subtitle='And help transform healthcare for everyone.'
    />
    <p>{intro}</p>
    <p>{intro2}</p>
  </SectionContainer>
)

const Mission = () => (
  <SectionContainer>
    <h2>Our Mission</h2>
    <p>{mission}</p>
  </SectionContainer>
)

const Values = () => (
  <SectionContainer>
    <h2>Our values</h2>
    <p>{values}</p>
  </SectionContainer>
)

const SectionContainer = styled.section`
  padding: 10px 0;
`

const PerksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  max-width: 600px;

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const PerkItem = styled.p`
  padding: 0;
  margin: 7px 0;
`

const Perks = () => (
  <SectionContainer>
    <h2>Our perks</h2>
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

const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const intro2 = "Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum."
const mission = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const values = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
