import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ProfileListContainer } from '../../../../componentLibrary/templates/cardLists/ProfileCardList'

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

const Title = styled.h3`margin: 10px 0;`
