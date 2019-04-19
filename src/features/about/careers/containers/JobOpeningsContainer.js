import React, { Fragment } from 'react'
import { Link } from '@reach/router'

export const JobOpeningsContainer = () => {
  return (
    <Fragment>
      <h2>Job openings</h2>
      <div>
        <JobPosition />
        <JobPosition />
        <JobPosition />
      </div>
    </Fragment>
  )
}

const JobPosition = (props) => {
  const {
    job = 'test job',
    location = 'location'
  } = props

  return (
    <div>
      <Link to={`/careers/${job}`}>{job}</Link>
      <span><b>{location}</b></span>
    </div>
  )
}
