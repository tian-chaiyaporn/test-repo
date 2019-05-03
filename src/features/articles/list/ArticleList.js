import React from 'react'

import { Filter } from './components/Filter'
import { ArticleListContainer } from './containers/ArticleListContainer'

export const ArticleList = (props) => {
  const { posts = [] } = props

  return (
    <div style={{ maxWidth: '1200px', padding: '80px 5%', margin: '0 auto' }}>
      <Filter />
      <ArticleListContainer posts={posts} />
    </div>
  )
}
