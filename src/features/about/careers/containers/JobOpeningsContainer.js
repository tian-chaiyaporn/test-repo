import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import styled from 'styled-components'
import { Colors, WINDOW_SIZES } from '../../../../constants/Styles'
import { ButtonInList } from '../../../../componentLibrary/atoms/button/ButtonInList'

export const JobOpeningsContainer = () => {
  return (
    <Fragment>
      <h2>Job openings</h2>
      <Fragment>
        <JobPosition />
        <JobPosition />
        <JobPosition />
      </Fragment>
    </Fragment>
  )
}

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  max-width: 600px;
  padding-top: 10px;
`

const StyledLink = styled(Link)`
  color: ${Colors.BLACK};
`

const JobPosition = (props) => {
  const {
    job = 'loren ipsum',
    location = 'location'
  } = props

  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.phone}px)`);

  return (
    matches
      ? <JobContainer>
          <StyledLink to={`/careers/${job}`}>{job}</StyledLink>
          <span><b>{location}</b></span>
        </JobContainer>
      : <ButtonInList title="job" link={`/careers/${job}`}  />
  )
}
