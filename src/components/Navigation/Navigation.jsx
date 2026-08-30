import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router'
import Pictures from '../../pages/Pictures/Pictures'

function Navigation() {
  return (
    <nav className='navigation'>
<Link to ='/Pictures'>Pictures</Link>
<br/>
<Link to ='/Thoughts'>Thoughts</Link>
<br/>
<a href='Milestones'>Milestones</a>
<br/>
<a href='AboutUs'>About Us</a>
<br/>
<a href='ContactUs'>Contact Us</a>
<br/>
    </nav>
  )
}

export default Navigation