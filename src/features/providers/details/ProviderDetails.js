import React from 'react'

import { OverviewContainer } from './containers/OverviewContainer'
import { PatientReviewContainer } from './containers/PatientReviewContainer'
import { HeadInfoContainer } from './containers/HeadInfoContainer'

export const ProviderDetails = () => {
  return (
    <div>
      <HeadInfoContainer />
      <OverviewContainer />
      <PatientReviewContainer />
    </div>
  )
}
