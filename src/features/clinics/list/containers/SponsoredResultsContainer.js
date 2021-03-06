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
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 12,
    id: 555,
    link: '/clinics/555'
  },
  {
    imageSrc: "",
    addressName: '',
    addressDetail: '60/4 Silom Road, Suriyawong, Bangkok, Thailand',
    tagTitle: 'Pulse Clinic (Silom)',
    tagContent: 'Beauty clinic',
    rating: 5,
    reviewCount: 10,
    id: 666,
    link: '/clinics/666'
  },
]
