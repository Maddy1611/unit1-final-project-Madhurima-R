import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router'
import Pictures from '../../pages/Pictures/Pictures'
import Thoughts from '../../pages/Thoughts/Thoughts'
import Milestones from '../../pages/Milestones/Milestones'
import About from '../../pages/AboutUs/AboutUs'
import ContactUs from '../../pages/ContactUs/ContactUs'

function Navigation() {
  return (
    <nav className='navigation'>
<Link to ='/Pictures'>	📸 Pictures</Link>
<br/>
<br/>
<Link to ='/Thoughts'> 💬 Thoughts</Link>
<br/>
<br/>
<Link to ='/Milestones'> ⭐ Milestones</Link>
<br/>
<br/>
<Link to ='/AboutUs'> 👋 About Us</Link>
<br/>
<br/>
<Link to ='ContactUs'> 📩 Contact Us</Link>
<br/>
    </nav>
  )
}

export default Navigation