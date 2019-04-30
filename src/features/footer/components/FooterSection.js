import React from 'react'
import styled from 'styled-components'
import { Link } from '../../../Router.js'
import { SmallParagraph } from '../../../constants/BodyText'

const StyledSection = styled.section`color: white;`
const StyledList = styled.ul`padding: 0`
const StyledLink = styled(Link)`color: white;`

const StyledListElement = styled.li`
  list-style: none;
  margin: 8px 0;
`

const StyledTitle = styled(SmallParagraph)`
  color: white;
  font-family: 'AkagiProSemiBold';
`

export const FooterSection = (props) => {
  const {
    title = '',
    list = [{ to: '/', text: '' }]
  } = props

  const listOfLinks = list.map(link => (
    <StyledListElement key={link.text}>
      <StyledLink to={link.to}>{link.text}</StyledLink>
    </StyledListElement>
  ))

  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>{listOfLinks}</StyledList>
    </StyledSection>
  )
}
