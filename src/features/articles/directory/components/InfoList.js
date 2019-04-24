import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../Router'
import { Colors, MEDIA } from '../../../../constants/Styles'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { ButtonInList } from '../../../../componentLibrary/atoms/button/ButtonInList'

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
  ${MEDIA.phone`margin: 0;`}
`

const StyledHeading = styled.h1`
  margin: 0;
  padding: 0;
`

const StyledContainer = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK}

  ${MEDIA.phone`
    padding: 10px 0;
    border-bottom: none;
  `}
`

export const InfoList = (props) => {
  const {
    alphabet = '',
    titles = []
  } = props
  const matches = useMediaQuery('(min-width:576px)');

  const list = titles.map(title =>
    matches
    ? (      
      <StyledListElem key={title}>
        <StyledLink to={`/health/${title.replace(' ', '-')}`}>
          {title}
        </StyledLink>
      </StyledListElem>
    ) : (
      <ButtonInList key={title} title={title} link={`/health/${title.replace(' ', '-')}`} />
    )
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
