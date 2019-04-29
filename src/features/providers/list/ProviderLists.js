import React from 'react'

import { Filter } from './components/Filter'
import { SponsoredResultsContainer } from './containers/SponsoredResultsContainer'
import { ListContainer } from './containers/ListContainer'
import { Explanation } from './components/Explanation'
import { MapContainer } from './containers/MapContainer'

export const ProviderLists = () => {
  return ( 
    <div>
      <div style={{ margin: '0 auto', background: 'white', padding: '0 30px 20px 30px' }}>
        <Filter />
      </div>
      <div style={{ margin: '0 auto', padding: '30px', backgroundColor: 'rgba(240, 250, 248, 0.5)' }}>
        <MapContainer />
        <SponsoredResultsContainer />
        <ListContainer />
        <Explanation />
      </div>
    </div>
  )
}
