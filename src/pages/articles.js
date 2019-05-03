import React from 'react'
import { useRouteData } from 'react-static'
import { ArticleList } from '../features/articles/list/ArticleList'

export default function Blog() {
  const { posts } = useRouteData()
  return <ArticleList posts={posts} />
}
