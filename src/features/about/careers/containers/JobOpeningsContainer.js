import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import styled from 'styled-components'
import { Colors, WINDOW_SIZES } from '../../../../constants/Styles'
import { LargeSpan } from '../../../../constants/BodyText'
import { ButtonInList } from '../../../../componentLibrary/atoms/button/ButtonInList'

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  max-width: 800px;
  padding-top: 10px;
`
const StyledLink = styled(Link)`color: ${Colors.BLACK};`
const JobName = styled(LargeSpan)`font-family: 'AkagiProExtraLight';`
const LocationStyle = styled(LargeSpan)`font-family: 'AkagiProBook';`

const JobPosition = (props) => {
  const {
    job = 'loren ipsum',
    location = 'location'
  } = props

  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.phone}px)`);

  return (
    matches
      ? <JobContainer>
          <StyledLink to={`/careers/${job}`}><JobName>{job}</JobName></StyledLink>
          <LocationStyle><b>{location}</b></LocationStyle>
        </JobContainer>
      : <ButtonInList title="job" link={`/careers/${job}`}  />
  )
}

export const JobOpeningsContainer = () => {
  return (
    <Fragment>
      <h3>Job openings</h3>
      <Fragment>
        <JobPosition />
        <JobPosition />
        <JobPosition />
      </Fragment>
    </Fragment>
  )
}
