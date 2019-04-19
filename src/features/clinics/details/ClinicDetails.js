import React from 'react'

import { HeadInfoContainer } from './containers/HeadInfoContainer'
import { OverviewContainer } from './containers/OverviewContainer'
import { MedicalTeamContainer } from './containers/MedicalTeamContainer'
import { SpecialtiesContainer } from './containers/SpecialtiesContainer'
import { BranchesContainer } from './containers/BranchesContainer'

export const ClinicDetails = () => {
  return (
    <div>
      <HeadInfoContainer />
      <div>
        <OverviewContainer />
        <SpecialtiesContainer />
        <MedicalTeamContainer />
        <BranchesContainer />
      </div>
    </div>
  )
}
