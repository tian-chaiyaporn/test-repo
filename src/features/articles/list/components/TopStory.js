import React, { Fragment } from 'react'
import styled from 'styled-components'
import { MEDIA, Colors } from '../../../../constants/Styles'
import { LargeParagraph } from '../../../../constants/BodyText'
import { TagLine } from '../../../../componentLibrary/molecules/tagline/TagLine'

const TopStoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 30px;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;

  ${MEDIA.tablet`
    display: block;
  `}
`

export const TopStory = (props) => {
  const {
    title = 'Nullam dignissim dapibus augue, eget aliquam',
    subtitle = 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    tagTitle = 'Richard Rhodes',
    tagContent = 'Feb 20 - 3 min read',
    tagImg = ''
  } = props
  return (
    <Fragment>
      <h2>Top Story</h2>
      <TopStoryContainer>
        <img src={'http://placekitten.com/g/500/350'} alt={'placeholder'}></img>
        <div>
          <h2 style={{ margin: '20px 0 20px 0' }}>{title}</h2>
          <LargeParagraph style={{ color: Colors.BROWN_GREY, margin: '0 0 20px 0' }}>{subtitle}</LargeParagraph>
          <TagLine style={{ fontSize: '13px' }} title={tagTitle} content={tagContent} source={tagImg} />
        </div>
      </TopStoryContainer>
    </Fragment>
  )
}
