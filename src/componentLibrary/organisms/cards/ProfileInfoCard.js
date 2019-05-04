import React from 'react'
import styled from 'styled-components'
import { Colors, MEDIA } from '../../../constants/Styles'

import { Card } from '../../atoms/card/Card'
import { TagLineText } from '../../molecules/tagline/TagLineText'
import { ThumbnailCircle } from '../../atoms/image/ThumbnailCircle'
import { StarWithRating } from '../../atoms/stars/Star'
import { Link } from '../../../Router'

export const ProfileInfoCard = (props) => {
  const {
    imageSrc = "",
    addressName = '',
    addressDetail = '',
    tagTitle = '',
    tagContent = '',
    rating,
    reviewCount,
    withAd = false,
    link = ''
  } = props
  return (
    <StyledCard minWidth='248px' height='320px' padding='1.5em 1em'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ThumbnailCircle source={imageSrc} />
        {withAd ? <div><AdBox>Ad</AdBox></div> : null}
      </div>
      <MarginVertical>
        <Link to={link}>
          <TagLineText
            style={{ fontSize: '13px' }}
            title={tagTitle}
            content={tagContent}
          />
        </Link>
      </MarginVertical>
      <StarWithRating rating={rating} reviewCount={reviewCount} />
      <MarginVertical margin={'15px 0'}>
        <InfoText title={addressName} content={addressDetail}/>
      </MarginVertical>
    </StyledCard>
  )
}

export const InfoText = (props) => {
  const contentElement = props.content
    ? (<StyledContent color={Colors.BROWNISH_GREY}>{props.content}</StyledContent>)
    : null

  return (
    <MarginVertical>
      <StyledTitle>{props.title}</StyledTitle>
      {contentElement}
    </MarginVertical>
  )
}

const StyledCard = styled(Card)`
  max-width: 248px;
  height: 320px;

  ${MEDIA.phone`
    max-width: 100%;
    height: auto;
  `}
`

const AdBox = styled.p`
  padding: 2px 7px 0 7px;
  border: 1px solid ${Colors.LIGHT_TEAL};
  border-radius: 3px;
  font-size: 0.7em;
  margin: -10px 0 0 0;
  color: ${Colors.AQUA_MARINE};
`

const StyledTitle = styled.address`
  font-family: 'AkagiProMedium';
  font-style: normal;
  margin: 0 auto;
  font-size: 16px;
  letter-spacing: -0.1px;
`

const StyledContent = styled.address`
  font-family: 'AkagiProLight';
  font-style: normal;
  margin: 0 auto;
  letter-spacing: -0.1px;
  font-size: 15px;
  color: ${props => props.color || 'darkgray'};
`

const MarginVertical = styled.div`
  margin:  ${props => props.margin || '10px 0'};
`
