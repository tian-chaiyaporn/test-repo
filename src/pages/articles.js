import React, { Fragment } from 'react'
import { useRouteData } from 'react-static'
import { ArticleList } from '../features/articles/list/ArticleList'
import Header from '../features/header/HeaderContainer.js'
import { Footer } from '../features/footer/FooterContainer.js'

export default function Blog() {
  const { posts } = useRouteData()
  return (
		<Fragment>
			<Header />
			<ArticleList posts={posts} />
			<Footer />
		</Fragment>
	)
}
