import React, { Fragment } from 'react'
import styled from 'styled-components'
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
    id: 11
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 22
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 33
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 44
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 55
  }
]

const Title = styled.h3`margin: 10px 0;`

export const ListContainer = (props) => {
  const {
    searchTerm = 'Dermatologist',
    searchResultCount = 12,
    searchResult = data
  } = props

  return ( 
    <Fragment>
      <Title>{`${searchTerm} (${searchResultCount})`}</Title>
      <ProfileListContainer data={searchResult} />
    </Fragment>
  )
}
