import React, { Fragment } from 'react'
import { Link } from '../../../../Router'

export const InfoList = (props) => {
  const {
    alphabet = '',
    titles = []
  } = props

  const list = titles.map(title =>
    <li>
      <Link to={`/health/${title.replace(' ', '-')}`}>
        {title}
      </Link>
    </li>
  )

  return (
    <Fragment>
      <h1>{alphabet}</h1>
      <ul>
        {list}
      </ul>
    </Fragment>
  )
}
