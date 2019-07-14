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

const data = [
	{
		"imageSrc": "",
		"addressName": "Phyathai 2 International Hospital",
		"addressDetail": "943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400",
		"tagTitle": "Dr. Kittichai Sipiyarak",
		"tagContent": "Dermatologist",
		"rating": 3,
		"reviewCount": 12,
		"id": 11,
		"link": "providers/11",
		"coordinates": {
			"latitude": "37.423021",
			"longitude": "-122.083739"
		}
	},
	{
		"imageSrc": "",
		"addressName": "Phyathai 2 International Hospital",
		"addressDetail": "943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400",
		"tagTitle": "Dr. Kittichai Sipiyarak",
		"tagContent": "Dermatologist",
		"rating": 3,
		"reviewCount": 12,
		"id": 12,
		"link": "providers/12",
		"coordinates": {
			"latitude": "37.423021",
			"longitude": "-122.083739"
		}
	},
	{
		"imageSrc": "",
		"addressName": "Phyathai 2 International Hospital",
		"addressDetail": "943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400",
		"tagTitle": "Dr. Kittichai Sipiyarak",
		"tagContent": "Dermatologist",
		"rating": 3,
		"reviewCount": 12,
		"id": 13,
		"link": "providers/13",
		"coordinates": {
			"latitude": "37.423021",
			"longitude": "-122.083739"
		}
	},
	{
		"imageSrc": "",
		"addressName": "Phyathai 2 International Hospital",
		"addressDetail": "943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400",
		"tagTitle": "Dr. Kittichai Sipiyarak",
		"tagContent": "Dermatologist",
		"rating": 3,
		"reviewCount": 12,
		"id": 14,
		"link": "providers/14",
		"coordinates": {
			"latitude": "37.423021",
			"longitude": "-122.083739"
		}
	},
	{
		"imageSrc": "",
		"addressName": "Phyathai 2 International Hospital",
		"addressDetail": "943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400",
		"tagTitle": "Dr. Kittichai Sipiyarak",
		"tagContent": "Dermatologist",
		"rating": 3,
		"reviewCount": 12,
		"id": 15,
		"link": "providers/15",
		"coordinates": {
			"latitude": "37.423021",
			"longitude": "-122.083739"
		}
	}
]