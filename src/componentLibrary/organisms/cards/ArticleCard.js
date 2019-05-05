import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/Styles'
import { SmallParagraph } from '../../../constants/BodyText'
import { Link } from '../../../Router'
import { urlNormalizer } from '../../../utils/utils'

import { TagLine } from '../../molecules/tagline/TagLine'

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
    tagImg = ''
  } = props
  return (
    <StyledArticle>
      <StyledImage colors={Colors} src={imageSrc} />
      <Link to={`/articles/${urlNormalizer(articleTitle)}`}> 
      <ArticleText title={articleTitle} content={articleContent}/>
      <MarginVertical>
        <TagLine style={{ fontSize: '13px' }} title={tagTitle} content={tagContent} source={tagImg} />
      </MarginVertical>
      </Link>
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
      <Link to={`/articles/${urlNormalizer(articleTitle)}`}> 
        <ArticleText title={articleTitle} content={articleContent}/>
      </Link>
    </StyledArticle>
  )
}

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '100%'};
  max-height: ${props => props.height || 'auto'};
  border-radius: 2px;
  background-color: #ffffff;
  padding: ${props => props.padding || '0'};
`

const StyledTitle = styled.h3`
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: -0.1px;
`

const StyledContent = styled(SmallParagraph)`
  font-family: 'AkagiProLight';
  font-weight: 100;
  margin: 0 auto;
  color: ${props => props.color || 'darkgray'};
`

const StyledArticle = styled.article`
  width: ${props => props.width || '100%'};
  max-width: ${props => props.width || '100%'};
  margin: 0 auto;
`

const MarginVertical = styled.div`
  margin: 20px 0;
`
