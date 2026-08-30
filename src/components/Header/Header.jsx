
import React from 'react'
import "./Header.css"
import memoryJarLogo from '../../assets/memory-jar-logo.png'

function Header() {
  return (
    <div className = "header">
      <img src = {memoryJarLogo} alt = "Memory Jar Logo" className = "memory-jar-logo" width = "80" height = "100" />
      <div className='heading-box'>
        <h1>Memory Jar 💕</h1>
        <p><em>Preserve the memories that matter</em></p>
      </div>
    </div>
  )
}

export default Header