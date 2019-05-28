import React from 'react'
import { MainHeadings } from '../../atoms/headings/MainHeadings'
import { QuoteCard } from '../../organisms/cards/QuoteCard'
import { CarouselBase } from '../../molecules/carousel/CarouselBase'

export const Testimonies = (props) => {
	const {
		testimonies = mockTestimonies,
		title = '',
		subtitle = ''
	} = props

  return (
    <section style={{ backgroundColor: 'rgba(240, 250, 248, 0.5)'	}}>
			<div
				style={{
					margin: '0 auto',
					padding: '100px 5% 50px 5%',
					maxWidth: '1200px'
				}}
			>
				<div style={{ paddingBottom: '36px' }}>
					<MainHeadings title={title} subtitle={subtitle} />
				</div>
				<Slide testimonies={testimonies} />
			</div>
		</section>
  )
}

const Slide = ({ testimonies }) => {
	const handleOnDragStart = e => e.preventDefault()
	const responsiveSettings = {
		0: { items: 1 },
		550: { items: 2 },
		900: { items: 3 },
		1150: { items: 4 },
	}
	const top = '40%'
  return (
		<CarouselBase override={{ responsiveSettings, top }} >
			{
				testimonies.map(testimony => (
					<div style={{ padding: '0 20px 0 0' }}>
						<QuoteCard
							key={testimony.title}
							onDragStart={handleOnDragStart}
							content={testimony.content}
							tagTitle={testimony.title}
							tagContent={testimony.subtitle}
						/>
					</div>
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