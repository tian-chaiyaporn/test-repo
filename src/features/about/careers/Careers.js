import React, { Fragment } from 'react'
import { JobOpeningsContainer } from './containers/JobOpeningsContainer' 

export const Careers = () => {
  return (
    <div>
      <JoinUs />
      <Mission />
      <Values />
      <Perks />
      <JobOpeningsContainer />
    </div>
  )
}

const JoinUs = () => (
  <Fragment>
    <h1>Join Us</h1>
    <h1>And help transform healthcare for everyone.</h1>
    <p>{intro}</p>
    <p>{intro2}</p>
  </Fragment>
)

const Mission = () => (
  <Fragment>
    <h2>Our Mission</h2>
    <p>{mission}</p>
  </Fragment>
)

const Values = () => (
  <Fragment>
    <h2>Our values</h2>
    <p>{values}</p>
  </Fragment>
)

const Perks = () => (
  <Fragment>
    <h2>Our Mission</h2>
    <div>
      <p>100% paid health benefits</p>
      <p>Vacation and parental leave packages</p>
      <p>Lunch and snacks on us</p>
      <p>Cell phone reimbursement</p>
      <p>Gym discount</p>
      <p>Weekly yoga</p>
    </div>
  </Fragment>
)

const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const intro2 = "Curabitur tincidunt tincidunt sem, quis porta est gravida sed. Phasellus auctor, sem ac suscipit ultrices, mi erat lacinia nisi, eu imperdiet metus turpis eget leo. In vestibulum, magna eu mattis tempor, tellus ipsum molestie purus, sed mattis metus mi a justo. Integer tellus turpis, tempor sit amet ex ut, tincidunt pharetra metus. In rhoncus ipsum eu vehicula condimentum."
const mission = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
const values = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac vulputate neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl lectus, bibendum et elit vitae, hendrerit aliquet eros. Curabitur placerat a arcu et efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a massa egestas orci ornare viverra. Donec malesuada eget lorem at dictum. Duis id sollicitudin enim, et condimentum nisi. In pellentesque elit ac consequat tempus."
