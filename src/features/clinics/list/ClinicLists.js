import React from 'react'

import { Filter } from './components/Filter'
import { ListContainer } from './containers/ListContainer'
import { SponsoredResultsContainer } from './containers/SponsoredResultsContainer'
import { Explanation } from './components/Explanation'
import { MapContainer } from './containers/MapContainer'

export const ClinicLists = () => {
  return ( 
    <div>
      <Filter />
      <MapContainer />
      <ListContainer />
      <SponsoredResultsContainer />
      <Explanation />
    </div>
  )
}
