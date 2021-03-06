import React, { useRef } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import { Colors, WINDOW_SIZES } from '../../../constants/Styles'

export const CarouselBase = (props) => {
	const {
		override = {},
		numberOfDisplayItems = 3
	} = props
	const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)
	const carouselRef = useRef();
	const responsiveSettings = override.responsiveSettings || {
		0: { items: 1 },
		[WINDOW_SIZES.tablet]: { items: numberOfDisplayItems }
	}

	let windowWidth

	if (typeof window !== 'undefined') {
		windowWidth = window.innerWidth < 1200 ? window.innerWidth : 1200
	} else {
		windowWidth = 1200
	}

	const top = `${(windowWidth / numberOfDisplayItems * 0.6 / 2) - 25}px`
	return (
		<div style={{ position: 'relative' }}>
			{
				matches &&
					<NextButton
						onClick={() => carouselRef.current._slideNext()}
						top={override.top || top}
					>
						Next
					</NextButton> 
			}
			<AliceCarousel
				mouseDragEnabled
				buttonsDisabled
				dotsDisabled
				stagePadding={{ paddingRight: 40 }}
				items={props.children || []}
				ref={carouselRef}
				responsive={responsiveSettings}
			/>
		</div>
	)
}

const NextButton = styled.button`
	position: absolute;
	top: ${props => props.top || '25%'};
	right: -21px;
	z-index: 1;
	border-radius: 50%;
	width: 42px;
	height: 42px;
	border: 1px solid ${Colors.VERY_LIGHT_PINK};
	outline: none;
	background: white;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`
