import React from 'react'
import styled from 'styled-components'
import { MEDIA, Colors } from '../../../constants/Styles'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { ProfileInfoCard } from '../../../componentLibrary/organisms/cards/ProfileInfoCard'
import { Link } from '../../../Router'

export const DoctorReviewContainer = (props) => {
	const lists = data.map(card => (
		<ProfileInfoCard
			key={card.id}
			imageSrc={card.imageSrc}
			addressName={card.addressName}
			addressDetail={card.addressDetail}
			tagTitle={card.tagTitle}
			tagContent={card.tagContent}
			rating={card.rating}
			reviewCount={card.reviewCount}
			link={card.link}
		/>
	))

  return (
		<div style={{ backgroundColor: 'rgba(240, 250, 248, 0.5)' }}>
			<div
				style={{
					margin: '0 auto',
					padding: '100px 5% 50px 5%',
					maxWidth: '1200px',
				}}
			>
				<MainHeadings
					title="Doctor reviews"
					subtitle="Sharing your experience"
				/>
				<GridContainer>
					{lists}
				</GridContainer>
				<StyledLink to={'/providers'}>
					Show more reviews
				</StyledLink>
			</div>
		</div>
  )
}

const StyledLink = styled(Link)`
	color: ${Colors.AQUA_MARINE};
	display: inline-block;
	margin-top: 36px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 15px;
  column-gap: 15px;
  margin: 0 auto;
  margin-top: 30px;
	width: 100%;

	${MEDIA.largeDesktop`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${MEDIA.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const data = [
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 11,
    link: 'providers/11',
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 22,
    link: 'providers/22',
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 33,
    link: 'providers/33',
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 44,
    link: 'providers/44',
  },
  {
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 525,
    link: 'providers/55',
	},
	{
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 55,
    link: 'providers/55',
	},
	{
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 545,
    link: 'providers/55',
	},
	{
    imageSrc: "",
    addressName: 'Phyathai 2 International Hospital',
    addressDetail: '943 Phaholyothin Road, Phyathai, Phyathai, Bangkok 10400',
    tagTitle: 'Dr. Kittichai Sipiyarak',
    tagContent: 'Dermatologist',
    rating: 3,
    reviewCount: 12,
    id: 355,
    link: 'providers/55',
  }
]
