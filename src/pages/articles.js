import React from 'react'
import { useRouteData } from 'react-static'
import { ArticleList } from '../features/articles/list/ArticleList'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <ArticleList posts={posts} />
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}
