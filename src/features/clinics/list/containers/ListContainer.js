import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ProfileListContainer } from '../../../../componentLibrary/templates/cardLists/ProfileCardList'

export const ListContainer = (props) => {
  const {
    searchTerm = 'Clinics',
    searchResultCount = 5,
    searchResult = data
  } = props

  return ( 
    <Fragment>
      <Title>{`${searchTerm} (${searchResultCount})`}</Title>
      <ProfileListContainer data={searchResult} />
    </Fragment>
  )
}

const Title = styled.h3`margin: 10px 0;`

const data = [
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 12,
    id: 18,
    link: 'providers/18',
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 20,
    link: 'providers/20',
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 100,
    link: 'providers/100',
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 19,
    link: 'providers/19',
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 10,
    link: 'providers/10',
  }
]

