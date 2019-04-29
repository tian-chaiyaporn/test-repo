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
    id: 18
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 20
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 100
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 19
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 10
  }
]

export const ListContainer = (props) => {
  const {
    searchTerm = 'Clinics',
    searchResultCount = 5,
    searchResult = data
  } = props

  return ( 
    <Fragment>
      <h2>{`${searchTerm} (${searchResultCount})`}</h2>
      <ProfileListContainer data={searchResult} />
    </Fragment>
  )
}
