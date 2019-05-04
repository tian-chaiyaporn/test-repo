import React, { Fragment } from 'react'
import { Careers } from '../features/about/careers/Careers'

export default () => (
  <Fragment>
    <img style={{ width: '100%' }} src="https://picsum.photos/1200/500" alt="people working" />
    <div style={{ maxWidth: "1200px", margin: '0 auto', padding: '0 8%' }}>
      <Careers />
    </div>
  </Fragment>
)
