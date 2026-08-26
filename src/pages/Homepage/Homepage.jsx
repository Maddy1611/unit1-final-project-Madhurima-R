import React from 'react'
import "./Homepage.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Dashboard from '../../components/Dashboard/Dashboard'
import Navigation from '../../components/Navigation/Navigation'

function Homepage() {
  return (
    <div className='homepage'>

    <div className='header-box'>
       <Header />
    </div>

    <div className='main-layout'>
    <div className='navigation-box'>
       <Navigation />
    </div>
    <div className='dashboard-box'>
       <Dashboard />
    </div>
    </div>
    
    <div className='footer-box'>
       <Footer/>
    </div>
    </div>
  )
}

export default Homepage