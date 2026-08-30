import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function AboutUs() {
  return (
    <div>
     <div className='header-box'>
        <Header />
     </div>
        <h2>About Memory Jar</h2><br/>
          <h3>Where little moments become forever memory:</h3>
          <p>Memory jar was created to make it easy for families to capture the moments they never want to forget.</p>
          <p>More than just a collection of photos, Memory Jar brings together pictures, thoughts, feelings and milestones in one meaningful space. It allows you to look back, celebrate growth, and remeber how they felt during each chapter of their journey.</p><br/>
          <h3>Our Mission:</h3>
          <p>We believe that memeories are about more than what happened, they are about how those moments made us feel.</p>
          <p>Memory Jar gives people a simple and personal way to preserve those feelings alongside their memories, creating a digital keepsake they can return to for years to come</p>
     <div className='footer-box'>
        <Footer />
     </div>
    </div>
  )
}

export default AboutUs