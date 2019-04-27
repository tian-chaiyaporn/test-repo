import React from 'react'
import styled from 'styled-components'
import { MEDIA } from '../../../constants/Styles'
import { MainHeadings } from '../../../componentLibrary/atoms/headings/MainHeadings'

const data = [
  { city: 'Bangkok', address1: 'Habitia Watcharapol', address2: 'Klong Thanon', country: 'Thailand' },
  { city: 'New York', address1: '568 Broadway', address2: '2nd Floor', country: 'NY 10012' }
]

const Address = (props) => (
  <div>
    <h4>{props.city || ''}</h4>
    <p>{props.address1 || ''}</p>
    <p>{props.address2 || ''}</p>
    <p>{props.country ? `${props.city}, ${props.country}` : ''}</p>
  </div>
)

const ContactListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin: 0 0 200px 0;

  ${MEDIA.phone`
    grid-template-columns: repeat(1, 1fr);
  `}
`

const Container = styled.section`
  padding-top: 50px;
`

export const Contact = () => {
  const contactList = data.map((contact) => (
    <Address
      city={contact.city}
      address1={contact.address1}
      address2={contact.address2}
      country={contact.country}
    />
  ))

  return (
    <div>
      <Container>
        <MainHeadings
          title='Contact Us'
          subtitle='Need Help? Visit our Knowledge Base.'
        />
      </Container>
      <Container>
        <h2>Our offices</h2>
        <ContactListContainer>
          {contactList}
        </ContactListContainer>
      </Container>
    </div>
  )
}
