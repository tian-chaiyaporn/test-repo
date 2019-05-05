import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "./customSlider.css"
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import { MEDIA, WINDOW_SIZES } from '../../../../constants/Styles'
import { ArticleCard } from '../../../../componentLibrary/organisms/cards/ArticleCard'

export const List = (props) => {
  const { articles = [] } = props

  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.tablet}px)`)


  const articleList = matches
    ? <GridContainer><KeepReading articles={articles} /></GridContainer>
    : <Slide articles={articles} />

  return (
    <div>
      <h3>Keep reading</h3>
      {articleList}
    </div>
  )
}

const KeepReading = ({ articles }) => articles
  .map(article => (
    <ArticleCard
      key={article.id}
      imageSrc={article.img}
      articleTitle={article.title}
      articleContent={article.subtitle}
    />
  ))

const Slide = ({ articles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <Slider settings={settings}>
      {
        articles.map(article => (
          <ArticleCard
            key={article.id}
            imageSrc={article.img}
            articleTitle={article.title}
            articleContent={article.subtitle}
          />
        ))
      }
    </Slider>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 20px;
  margin: 0 auto;
  margin-top: 30px;

  ${MEDIA.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
`
