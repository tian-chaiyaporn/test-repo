import React, { Fragment } from 'react'

export const ArticleListContainer = () => {
  return (
    <div>
      <TopStory />
      <List />
    </div>
  )
}

export const TopStory = () => {
  return (
    <Fragment>
      <h2>Top Story</h2>
      <div>
        <div>large image</div>
        <h2>Nullan disnissim</h2>
        <p>subtitle</p>
        <div>editor tag</div>
      </div>
    </Fragment>
  )
}

export const List = () => (
  <Fragment>
    <h3>Keep reading</h3>
    <div>
      <p>article1</p>
      <p>article2</p>
      <p>article3</p>
    </div>
  </Fragment>
)
