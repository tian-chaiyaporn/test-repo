import React from 'react'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'
import { QuoteCard } from '../../../componentLibrary/organisms/cards/QuoteCard'
import { CarouselBase } from '../../../componentLibrary/molecules/carousel/CarouselBase'

export const Testimonies = () => {
  return (
    <div style={{
			backgroundColor: 'rgba(240, 250, 248, 0.5)'
		}}>
			<div style={{ margin: '0 auto',
			padding: '100px 5% 50px 5%',maxWidth: '1200px' }}>
				<MainHeadings
					title="Hi, we're Wellglo"
					subtitle="Finding the right doctor made easy"
				/>
				<Slide testimonies={mockTestimonies} />
			</div>
		</div>
  )
}

const Slide = ({ testimonies }) => {
	const handleOnDragStart = e => e.preventDefault()
  return (
		<CarouselBase numberOfDisplayItems={4} >
			{
				testimonies.map(testimony => (
					<QuoteCard
						onDragStart={handleOnDragStart}
						content={testimony.content}
						tagTitle={testimony.title}
						tagContent={testimony.subtitle}
					/>
				))
			}
		</CarouselBase>
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