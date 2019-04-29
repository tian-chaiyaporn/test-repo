import React, { Fragment } from 'react'
import { ProfileListContainer } from '../../../../componentLibrary/templates/cardLists/ProfileCardList'

const data = [
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 122
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 211
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
