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
      <h4>🧭Navigation</h4> <br/>
<Link to ='/Pictures'>	📸 <br/> Pictures</Link>
<br/>
<br/>
<Link to ='/Thoughts'> 💬 <br/> Thoughts</Link>
<br/>
<br/>
<Link to ='/Milestones'> ⭐ <br/> Milestones</Link>
<br/>
<br/>
<Link to ='/AboutUs'> 👋 <br/> About Us</Link>
<br/>
<br/>
<Link to ='ContactUs'> 📩 <br/> Contact Us</Link>
<br/>
    </nav>
  )
}

export default Navigation