import React from 'react'
import styled from 'styled-components'
import { MEDIA } from '../../../../constants/Styles'
import { ArticleCardWithByline } from '../../../../componentLibrary/organisms/cards/ArticleCard'
import { TopStory } from '../components/TopStory'

export const ArticleListContainer = () => {
  return (
    <div>
      <TopStory />
      <List />
    </div>
  )
}

export const List = (props) => {
  const { articles = mockData } = props
  const articleLists = articles.map((article) => (
    <ArticleCardWithByline
      key={article.id}
      imageSrc={article.img}
      articleTitle={article.title}
      articleContent={article.subtitle}
      tagTitle={article.author}
      tagContent={`${article.publishDate} - ${article.timeToRead} min read`}
      tagImg={article.thumbnail}
    />
  ))
  return (
    <div style={{ padding: '30px 0' }}>
      <h3>Keep reading</h3>
      <GridContainer>
        {articleLists}
      </GridContainer>
    </div>
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

const mockData = [
  {
    id: '1',
    img: 'https://picsum.photos/335/240',
    title: 'What Is a Cardiologist?',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '2',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '3',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '4',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '5',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '6',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '7',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '8',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '9',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '10',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
  {
    id: '11',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
    subtitle: 'Mauris tempor pharetra urna, sed finibus metus dictum duis quis quam uratelam.',
    thumbnail: '',
    publishDate: 'Feb 20',
    timeToRead: '3',
    author: 'Richard Rhodes'
  },
]
