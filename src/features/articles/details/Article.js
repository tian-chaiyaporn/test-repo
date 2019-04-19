import React, { Fragment } from 'react'

import { ArticleContent } from './components/ArticleContent'
import { List } from './containers/ListContainer'
import { Sponsor } from './containers/SponsorContainer'

export const Article = (props) => {
  return (
    <div>
      <ArticleContent />
      <SocialBar />
      <Sponsor />
      <List />
    </div>
  )
}

const SocialBar = () => (
  <Fragment>
    <button>like</button>
    <button>share</button>
    <button>bookmark</button>
    <button>comment</button>
  </Fragment>
)
