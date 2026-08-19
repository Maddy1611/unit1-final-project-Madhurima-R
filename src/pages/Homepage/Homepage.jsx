import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Dashboard from '../../components/Dashboard/Dashboard'
import Navigation from '../../components/Navigation/Navigation'

function Homepage() {
  return (
    <>
    <Header />
    <Dashboard />
    <Navigation />
    <Footer/>
    </>
  )
}

export default Homepage