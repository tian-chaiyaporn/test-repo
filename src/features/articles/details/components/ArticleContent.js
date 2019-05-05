import React, { Fragment } from 'react'
import styled from 'styled-components'
import parse from 'html-react-parser'
import { Colors } from '../../../../constants/Styles'
import { TagLine } from '../../../../componentLibrary/molecules/tagline/TagLine'
import { Link } from '../../../../Router'

export const ArticleContent= (props) => {
  const {
    title = '',
    subtitle = '',
    content = '',
    author = '',
    dateAndTimeToRead = '',
    thumbnail = ''
  } = props
  return (
    <Fragment>
      <div style={{ padding: '20px 0' }}>
        <Link style={{ color: Colors.BLACK }} to={'/articles'}>{"Back"}</Link>
      </div>
      <HeadingThick>{title}</HeadingThick>
      <HeadingThin>{subtitle}</HeadingThin>
      <TagLinContainer>
        <TagLine
          title={author}
          content={dateAndTimeToRead}
          source={thumbnail}
          imageSize='50px'
        />
      </TagLinContainer>
      <Content content={content} />
    </Fragment>
  )
}

const Content = (props) => {
  var html = parse(props.content)
  return (
    <ContentContainer>
      <ContentStyle>{html}</ContentStyle>
    </ContentContainer>
  )
}

const HeadingThick = styled.h1`
  font-family: 'TisaLight';
  font-weight: 300;
  margin: 50px 0 5px 0;
`

const HeadingThin = styled.h1`
  font-weight: 100;
  margin: 5px 0 10px 0;
  color: ${Colors.BROWNISH_GREY};
`

const ContentStyle = styled.div`
  font-family: 'AkagiProExtraLight';
  font-weight: 100;
  font-size: 20px;
  color: ${Colors.BLACK}
`

const ContentContainer = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK}
`

const TagLinContainer = styled.div`padding-top: 30px;`
