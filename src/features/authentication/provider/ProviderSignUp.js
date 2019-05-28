import React from 'react'
import styled from 'styled-components'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { ThumbnailCircle } from '../../../componentLibrary/atoms/image/ThumbnailCircle'
import { Testimonies } from '../../../componentLibrary/templates/testimoniesSection/Testimonies'
import { SmallParagraph, LargeParagraph } from '../../../constants/BodyText'
import { MEDIA } from '../../../constants/Styles'
import { JoinForm } from './components/JoinForm'

const HeaderContainer = styled.div`
	background-image: linear-gradient(to bottom, #88e6e3, #50c9c3);
`

const HeaderGrid = styled.div`
	display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
	column-gap: 40px;
	justify-items: center;
	align-items: center;
	max-width: 1200px;
	margin: 0 auto;
	padding: 50px 5%;

  ${MEDIA.tablet`
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  `}
`

const BadgeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
	row-gap: 40px;
  padding: 50px 0;

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  `}
`

const Badge = (props) => (
	<div style={{ display: 'flex', maxWidth: '450px', justifySelf: props.justifySelf }}>
		<ThumbnailCircle />
		<div>
			<SmallParagraph style={{ fontFamily: 'AkagiProSemiBold', margin: '0 20px' }}>{props.title}</SmallParagraph>
			<SmallParagraph style={{ fontFamily: 'AkagiProLight', margin: '15px 20px' }}>{props.description}</SmallParagraph>
		</div>
	</div>
)

const SelfPromition = () => {
	return (
		<div
			style={{
				margin: '0 auto',
				padding: '100px 5% 50px 5%',
				maxWidth: '1200px'
			}}
		>
			<MainHeadings
				title='Why providers loves Wellglo?'
				subtitle='Just to name a few things'
			/>
			<BadgeContainer>
				<Badge
					justifySelf='start'
					title='Reduce your no show'
					description='Your patients can make an appointment, re-schedule, or cancel it, directly with a couple of clicks. Okadoc sends reminders so that your patients don’t miss their appointment.'
				/>
				<Badge
					justifySelf='end'
					title='Strengthen your online reputation'
					description='We help improve and protect your online presence by creating a custom Okadoc profile, publishing your activity and all useful information, knowing that those will always be fully under your control.'
				/>
				<Badge
					justifySelf='start'
					title='Attract and engage new patients'
					description='Patients will get to know you by viewing your profile. Strengthen your relationship with your patients by offering the simple, efficient and seamless online experience.'
				/>
				<Badge
					justifySelf='end'
					title='Optimize your booking'
					description='Patients can check your real-time availability and book an appointment. Our Calendar System helps fill  last minute openings resulting from cancellations.'
				/>
			</BadgeContainer>
		</div>
	)
}

const Contact = () => {
	return (
		<div
			style={{
				margin: '0 auto',
				padding: '100px 5% 50px 5%',
				maxWidth: '1200px',
				minHeight: '500px'
			}}
		>
			<MainHeadings
				title='Contact us now'
				subtitle='We’d love to start talking'
			/>
		</div>
	)
}

export const ProviderJoin = () => {
  return (
    <div>
			<HeaderContainer>
				<HeaderGrid>
				<div style={{ color: 'white', padding: '0 40px 0 0' }}>
					<h2 style={{ color: 'white', fontSize: '44px' }}>Get more new patients</h2>
					<LargeParagraph style={{ color: 'white', fontFamily: 'AkagiProExtraLight', fontSize: '24px' }}>
						Wellglo helps practices replace the portion of their patient panel they naturally lose every year.
					</LargeParagraph>
				</div>
				<JoinForm />
				</HeaderGrid>
			</HeaderContainer>
			<div>
				<SelfPromition />
			</div>
			<div>
				<Testimonies
					title='Providers thrive with Wellglo'
					subtitle='Here is what they say'
					testimonies={mockTestimonies}
				/>
			</div>
			<div>
				<Contact />
			</div>
    </div>
  )
}

const mockTestimonies = [
	{
		title: 'Dorothy Dixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
	{
		title: 'Dorothy Aixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
	{
		title: 'Dorothy Bixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
	{
		title: 'Dorothy Vixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
	{
		title: 'Dorothy Gixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
	{
		title: 'Dorothy Fixon',
		subtitle: 'Wellglo member',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat ex, ornare in ante id, tristique dictum libero. Phasellus pellentesque laoreet lorem.'
	},
]