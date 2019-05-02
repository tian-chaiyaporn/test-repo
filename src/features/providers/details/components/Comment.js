import React from 'react'
import styled from 'styled-components'
import { Colors, MEDIA } from '../../../../constants/Styles'
import { StarWithRating } from '../../../../componentLibrary/atoms/stars/Star'
import {
  SmallerParagraph,
  SmallParagraph,
  LargeParagraph,
  SmallerSpan
} from '../../../../constants/BodyText'

const StyledComment = styled.div`
  max-width: 800px;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK};
  padding-bottom: 35px;
  &:last-child { border-bottom: none; }
`
const RatingContainer = styled.div`
  display: flex;
  padding-top: 25px;
`
const ByLine = styled(SmallerSpan)`
  margin-right: 5px;
  color: ${Colors.BROWN_GREY}
`
const Rating = styled.div`
  margin-right: 40px;
  ${MEDIA.phone`
    margin-right: 20px;
  `}
`

export const Comment = (props) => {
  const {
    overall = 0,
    waitTime = 0,
    bedsideManner = 0,
    title = '',
    body = '',
    date = '',
    name = '',
    isVerified = false
  } = props

  if (!title && !body) {
    return null
  }

  return (
    <StyledComment>
      <RatingContainer>
        <Rating>
          <SmallerParagraph>Overall</SmallerParagraph>
          <StarWithRating rating={overall} reviewCount={0} starSize={'15px'} />
        </Rating>
        <Rating>
          <SmallerParagraph>Wait time</SmallerParagraph>
          <StarWithRating rating={waitTime} reviewCount={0} starSize={'15px'} />
        </Rating>
        <Rating>
          <SmallerParagraph>Bedside manner</SmallerParagraph>
          <StarWithRating rating={bedsideManner} reviewCount={0} starSize={'15px'} />
        </Rating>
      </RatingContainer>
      <LargeParagraph>{title}</LargeParagraph>
      <SmallParagraph>{body}</SmallParagraph>
      <ByLine>{date}</ByLine><ByLine>{'/'}</ByLine><ByLine>{name}</ByLine>
      <ByLine>{isVerified ? '(verified patient)' : '(unverified patient)'}</ByLine>
    </StyledComment>
  )
}

export const CommentList = (props) => {
  const { comments = [] } = props
  const commentList = comments.map(comment => (
    <Comment
      key={comment.title}
      overall={comment.overall}
      waitTime={comment.waitTime}
      bedsideManner={comment.bedsideManner}
      title={comment.title}
      body={comment.body}
      date={comment.date}
      name={comment.name}
      isVerified={comment.isVerified}
    />
  ))
  return (
    <section >{commentList}</section>
  )
}
