import React, { Fragment } from 'react'
import { ProfileListContainer } from '../../../../componentLibrary/templates/cardLists/ProfileCardList'

const data = [
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 12,
    id: 555
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 666
  },
]

export const SponsoredResultsContainer = (props) => {
  const {
    searchResult = data
  } = props

  return ( 
    <Fragment>
      <h2>{`Sponsored results`}</h2>
      <ProfileListContainer data={searchResult} withAd />
    </Fragment>
  )
}
