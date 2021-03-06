import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ProfileListContainer } from '../../../../componentLibrary/templates/cardLists/ProfileCardList'

export const SponsoredResultsContainer = (props) => {
  const {
    searchResult = data
  } = props

  return ( 
    <Fragment>
      <Title>{`Sponsored results`}</Title>
      <ProfileListContainer data={searchResult} withAd />
    </Fragment>
  )
}

const Title = styled.h3`margin: 10px 0;`

const data = [
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 122,
    link: 'providers/122'
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 211,
    link: 'providers/211'
  },
]
