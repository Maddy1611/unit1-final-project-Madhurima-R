import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router'
import Pictures from '../../pages/Pictures/Pictures'
import Thoughts from '../../pages/Thoughts/Thoughts'
import Milestones from '../../pages/Milestones/Milestones'
import About from '../../pages/AboutUs/AboutUs'

function Navigation() {
  return (
    <nav className='navigation'>
<Link to ='/Pictures'>	📸 Pictures</Link>
<br/>
<Link to ='/Thoughts'> 💬 Thoughts</Link>
<br/>
<Link to ='/Milestones'> ⭐ Milestones</Link>
<br/>
<Link to ='/AboutUs'> 👋 About Us</Link>
<br/>
<a href='ContactUs'> 📩 Contact Us</a>
<br/>
    </nav>
  )
}

export default Navigation