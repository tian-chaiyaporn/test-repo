import React from 'react'

export const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <h1>Need Help? Visit our Knowledge Base.</h1>
      </div>
      <div>
        <h2>Our offices</h2>
        <div>
          <Bangkok />
          <NewYork />
        </div>
      </div>
    </div>
  )
}

// Mock data - once data structure is received, create an address generator
const Bangkok = () => (
  <div>
    <h4>Bangkok</h4>
    <p>Habitia Watcharapol</p>
    <p>Klong Thanon</p>
    <p>Bangkok, Thailand</p>
  </div>
)

const NewYork = () => (
  <div>
    <h4>New York</h4>
    <p>568 Broadway</p>
    <p>2nd Floor</p>
    <p>New York, NY 10012</p>
  </div>
)
