import React, { Fragment } from 'react'

export const ArticleContent= () => (
  <Fragment>
    <Heading />
    <Content />
  </Fragment>
)

export const Heading = () => (
  <Fragment>
    <h1>Title</h1>
    <h1>Subtitle</h1>
  </Fragment>
)

export const Content = () => (
  <Fragment>
    <div>byline</div>
    <button>follow</button>
    <p>content</p>
  </Fragment>
)
