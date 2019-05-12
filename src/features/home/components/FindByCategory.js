import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { SmallerParagraph } from '../../../constants/BodyText'

export const FindByCategory = () => {
  return (
		<div
			style={{
				margin: '0 auto',
				padding: '100px 5% 50px 5%',
				maxWidth: '1200px'
			}}
		>
			<MainHeadings
				title="Find doctors and dentists by"
				subtitle="Find the right care now"
			/>
			<ListContainer>
				<div key={1}>
					<ListHeader source={'/assets/pin.svg'} title='City' />
					<List items={data.cities} />
				</div>
				<div key={2}>
					<ListHeader source={'/assets/insurance-hands.svg'} title='Specialty' />
					<List items={data.specialty} />
				</div>
				<div key={3}>
					<ListHeader source={'/assets/insurance-card.svg'} title='Insurance' />
					<List items={data.insurance} />
				</div>
			</ListContainer>
		</div>
  )
}

const List = (props) => {
	const { items = [] } = props
	return (
		<StyledUnorderedListContainer>
			{
				items.map(item =>
					<StyledListElem key={item}>
						<SmallerParagraph>{item}</SmallerParagraph>
					</StyledListElem>)
			}
		</StyledUnorderedListContainer>
	)
}

const ListHeader = (props) => {
	return (
		<StyledTitle>
			<StyledImage src={props.source} alt={props.title} />
			<h4 style={{ padding: '4px 0 0 0', margin: 0 }}>{props.title}</h4>
		</StyledTitle>
	)
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
	column-gap: 32px;
	margin-top: 32px;
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  align-items: center;
  color: ${props => props.color || 'black'};
	border-bottom: 1px solid ${Colors.BLACK};
	padding: 10px 0;
`

const StyledImage = styled.img`
	max-height: ${props => props.height || '30px'};
	margin-right: 10px;
`

const StyledUnorderedListContainer = styled.ul`
  margin: 26px 0 0 0;
	padding: 0;
`

const StyledListElem = styled.li`
  list-style: none;
  margin: 5px 0;
	padding: 0;
`

const data = {
	cities: [
		'Bangkok',
		'Chiang Mai',
		'Hat Yai',
		'Udon Thani',
		'Pattaya',
		'Pak Kret',
		'Nakhon Ratchasima',
		'Chaing Rai',
		'Ubon Ratchathani',
		'Nakhon Si Thammarat',
		'Hua Hin District',
		'Nonthaburi',
		'Surat Thani',
		'Phuket City',
		'Lampang',
		'Kanchanaburi',
	],
	specialty: [
		'Acupuncturist',
		'Allergist',
		'Alternative Medicine',
		'Andrologist (Male Infertility)',
		'Audiologist',
		'Bariatric Surgeon',
		'Beauty & Laser Therapist',
		'Cardiologist',
		'Cardiothoracic Surgeon',
		'Chiropractor',
		'Colorectal Surgeon',
		'Consultant Child & Adolescent Psychiatrist',
		'Cosmetic Physician',
		'Dental Hygienist',
		'Dentist',
		'Dermatologist'
	],
	insurance: [
		'Acupuncturist',
		'Allergist',
		'Alternative Medicine',
		'Andrologist (Male Infertility)',
		'Audiologist',
		'Bariatric Surgeon',
		'Beauty & Laser Therapist',
		'Cardiologist',
		'Cardiothoracic Surgeon',
		'Chiropractor',
		'Colorectal Surgeon',
		'Consultant Child & Adolescent Psychiatrist',
		'Cosmetic Physician',
		'Dental Hygienist',
		'Dentist',
		'Dermatologist'
	],
}
