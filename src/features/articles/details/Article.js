import React from 'react'

import { ArticleContent } from './components/ArticleContent'
import { List } from './containers/ListContainer'

export const Article = (props) => {
  const {
    title = '',
    subtitle = '',
    content = '',
    author = '',
    dateAndTimeToRead = '',
    thumbnail = '',
    articles = mockArticleData || []
  } = props
  return (
    <div style={{ padding: '40px', maxWidth: '960px', margin: '0 auto' }}>
      <ArticleContent
        title={title}
        subtitle={subtitle}
        content={content}  
        author={author}
        dateAndTimeToRead={dateAndTimeToRead}
        thumbnail={thumbnail}
      />
      <List articles={articles} />
    </div>
  )
}

const mockArticleData = [
  {
    id: '1',
    img: 'https://picsum.photos/335/240',
    title: 'Interdum et malesuada fames',
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
]
