import React from 'react'

import { Filter } from './components/Filter'
import { ArticleListContainer } from './containers/ArticleListContainer'

export const ArticleList = (props) => {
  const { posts = [] } = props

  return (
    <div>
      <Filter />
      <ArticleListContainer posts={posts} />
    </div>
  )
}
