import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'

import { TagLine } from '../../molecules/tagline/TagLine'

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '335px'};
  max-height: ${props => props.height || '240px'};
  border-radius: 2px;
  background-color: #ffffff;
  padding: ${props => props.padding || '0'};
`

const StyledTitle = styled.p`
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: -0.1px;
`

const StyledContent = styled.p`
  margin: 0 auto;
  letter-spacing: -0.1px;
  font-size: 16px;
  color: ${props => props.color || 'darkgray'};
`

const StyledArticle = styled.article`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '335px'};
`

const MarginVertical = styled.div`
  margin: 20px 0;
`

export const ArticleText = (props) => {
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

export const ArticleCardWithByline = (props) => {
  const {
    imageSrc = "",
    articleTitle = '',
    articleContent = '',
    tagTitle = '',
    tagContent = '',
  } = props
  return (
    <StyledArticle>
      <StyledImage colors={Colors} src={imageSrc} />
      <ArticleText title={articleTitle} content={articleContent}/>
      <MarginVertical>
        <TagLine style={{ fontSize: '13px' }} title={tagTitle} content={tagContent} />
      </MarginVertical>
    </StyledArticle>
  )
}

export const ArticleCard = (props) => {
  const {
    imageSrc = "",
    articleTitle = '',
    articleContent = '',
  } = props
  return (
    <StyledArticle>
      <StyledImage colors={Colors} src={imageSrc} />
      <ArticleText title={articleTitle} content={articleContent}/>
    </StyledArticle>
  )
}
