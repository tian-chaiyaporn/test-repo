import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../Router'
import { Colors } from '../../../../constants/Styles'

const StyledLink = styled(Link)`
  color: ${Colors.BLACK};
`

const StyledListElem = styled.li`
  list-style: none;
  margin: 10px 0;
`

const StyledListContainer = styled.ul`
  padding: 0;
  margin: 30px 0 0 0;
`

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
`

const StyledContainer = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK}
`

export const InfoList = (props) => {
  const {
    alphabet = '',
    titles = []
  } = props

  const list = titles.map(title =>
    <StyledListElem>
      <StyledLink to={`/health/${title.replace(' ', '-')}`}>
        {title}
      </StyledLink>
    </StyledListElem>
  )

  return (
    <StyledContainer>
      <StyledHeading>{alphabet}</StyledHeading>
      <StyledListContainer>
        {list}
      </StyledListContainer>
    </StyledContainer>
  )
}
