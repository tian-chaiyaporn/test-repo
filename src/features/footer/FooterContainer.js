import React from 'react'
import styled from 'styled-components'
import { footer as footerText } from '../../constants/strings/footer.js'
import { Link } from '../../Router.js'
import { Colors, MEDIA } from '../../constants/Styles'
import { FOOTER_LIST } from './links'
import { FooterSection } from './components/FooterSection'

const FooterStyled = styled.footer`
  margin: 0 auto;
  min-height: 500px;
  padding: 100px 0 50px 0;
  background-color: ${props => props.color || 'turquoise' }

  ${MEDIA.tablet`display: none;`}
`

const StyledSection = styled.section`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`

const ListSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 100px auto;
  max-width: 1200px;
  padding: 0 5%;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-style: normal;
  margin-left: 25px;
`

export const Footer = () => {
  const bottomSection = () => (
    <StyledSection>
      <span>{footerText.copyright}</span>
      <StyledLink to="/">{footerText.privacyLink}</StyledLink>
      <StyledLink to="/">{footerText.termsOfUse}</StyledLink>
      <StyledLink to="/">{footerText.thai}</StyledLink> 
    </StyledSection>
  )

  const footerLists = FOOTER_LIST.map(list => (
      <FooterSection title={list.title} list={list.links} />
  ))
 
  return (
    <FooterStyled color={Colors.AQUA_MARINE}>
      <ListSection>
        {footerLists}
      </ListSection>
      {bottomSection()}
    </FooterStyled>
  )
}
