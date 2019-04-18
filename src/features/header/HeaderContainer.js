import React from 'react'
import { Link } from '../../Router.js'

import './Header.css'

export default () => (
  <nav>
    <Link to="/">Wellglo</Link>
    <Link to="/about">What is Wellglo</Link>
    <Link to="/blog">Why join?</Link>
    <Link to="/dynamic">How does it work?</Link>
    <Link to="/">List your practice on Wellglo</Link>
  </nav>
)
