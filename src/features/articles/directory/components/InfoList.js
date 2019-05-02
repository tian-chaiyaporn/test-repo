import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../../Router'
import { Colors, MEDIA, WINDOW_SIZES } from '../../../../constants/Styles'
import { LargeSpan } from '../../../../constants/BodyText'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { ButtonInList } from '../../../../componentLibrary/atoms/button/ButtonInList'

const StyledLink = styled(Link)`
  color: ${Colors.BLACK};
  font-family: 'AkagiProLight'
`

const StyledListElem = styled.li`
  list-style: none;
  margin: 5px 0;
`

const StyledListContainer = styled.ul`
  padding: 0;
  margin: 10px 0 0 0;
  ${MEDIA.phone`margin: 0;`}
`

const StyledHeading = styled.h2`
  margin: 0;
  padding: 0;
`

const StyledContainer = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${Colors.VERY_LIGHT_PINK};

  &:nth-last-child(-n+3) {
    border-bottom: none;
  }

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
  const matches = useMediaQuery(`(min-width:${WINDOW_SIZES.phone}px)`);

  const list = titles.map(title =>
    matches
    ? (      
      <StyledListElem key={title}>
        <StyledLink to={`/health/${title.replace(' ', '-')}`}>
          <LargeSpan>{title}</LargeSpan>
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
