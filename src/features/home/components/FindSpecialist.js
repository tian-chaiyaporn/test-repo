import React from 'react'
import styled from 'styled-components'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { ButtonInList } from '../../../componentLibrary/atoms/button/ButtonInList'
import { Colors, MEDIA } from '../../../constants/Styles'
import { Link } from '../../../Router'

export const FindSpecialist = () => {
  return (
    <div style={{ backgroundColor: 'rgba(240, 250, 248, 0.5)' }} >
			<div
				style={{
					margin: '0 auto',
					padding: '100px 5% 50px 5%',
					maxWidth: '1200px'
				}}
			>
				<MainHeadings
					title="Looking for a specialist?"
					subtitle="Find the right care now"
				/>
				<ListContainer>
					{
						data.buttons.map(button => (
							<ButtonInList
								key={button.title}
								title={button.title}
								link={button.link}
								imageSrc={button.imageSrc}
							/>
						))
					}
				</ListContainer>
				<StyledLink to="/providers">Show more specialists</StyledLink>
			</div>
		</div>
  )
}

const StyledLink = styled(Link)`
	color: ${Colors.BLACK};
	display: inline-block;
	margin-top: 36px;
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
	gap: 2%;
	margin: 32px 0;

	${MEDIA.desktop`grid-template-columns: repeat(3, 1fr);`}
	${MEDIA.phone`
		grid-template-columns: repeat(1, 1fr);
		gap: 0;
	`}
`

const data = {
	buttons: [
		{
			title: "Allergist",
			imageSrc: "/assets/illustrations/allergist.svg",
			link: "/"
		},
		{
			title: "Chiropractor",
			imageSrc: "/assets/illustrations/chiropractor.svg",
			link: "/"
		},
		{
			title: "Dentist",
			imageSrc: "/assets/illustrations/dentist.svg",
			link: "/"
		},
		{
			title: "Dermatologist",
			imageSrc: "/assets/illustrations/dermatologist.svg",
			link: "/"
		},
		{
			title: "Ear-nose-throat",
			imageSrc: "/assets/illustrations/eyes-ears-throat.svg",
			link: "/"
		},
		{
			title: "Pediatrician",
			imageSrc: "/assets/illustrations/pediatrician.svg",
			link: "/"
		},
		{
			title: "Plastic Surgeon",
			imageSrc: "/assets/illustrations/cosmetic.svg",
			link: "/"
		},
		{
			title: "Weight Loss",
			imageSrc: "/assets/illustrations/weight-loss-2.svg",
			link: "/"
		},
		{
			title: "OBGYN",
			imageSrc: "/assets/illustrations/obgyn.svg",
			link: "/"
		},
		{
			title: "Eye Doctor",
			imageSrc: "/assets/illustrations/eye-doctor.svg",
			link: "/"
		},
	]
}
