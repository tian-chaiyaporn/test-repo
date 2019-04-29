import React from 'react'
import styled from 'styled-components'
import { ProfileInfoCard } from '../../organisms/cards/ProfileInfoCard'
import { MEDIA } from '../../../constants/Styles'

const ProfileListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 20px 0;

  ${MEDIA.phone`
    justify-content: center;
  `}
`

export const ProfileListContainer = (props) => {
  const {
    data = [],
    withAd = false
  } = props

  const lists = data.map(card => (
    <div key={`${card.id}`} style={{ margin: '10px 10px 0 0' }}>
      <ProfileInfoCard
        imageSrc={card.imageSrc}
        addressName={card.addressName}
        addressDetail={card.addressDetail}
        tagTitle={card.tagTitle}
        tagContent={card.tagContent}
        rating={card.rating}
        reviewCount={card.reviewCount}
        withAd={withAd}
      />
    </div>
  ))

  return ( 
    <ProfileListWrapper>
      {lists}
    </ProfileListWrapper>
  )
}
