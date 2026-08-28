import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router'
import Pictures from '../../pages/Pictures/Pictures'

function Navigation() {
  return (
    <nav className='navigation'>
<Link to ='/Pictures'>Pictures</Link>
<a href='Thoughts'>Thoughts</a>
<a href='Milestones'>Milestones</a>
<a href='AboutUs'>About Us</a>
<a href='ContactUs'>Contact Us</a>
    </nav>
  )
}

export default Navigation