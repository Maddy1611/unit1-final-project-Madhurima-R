
import React from 'react'
import memoryJarLogo from '../../assets/memory-jar-logo.png'

function Header() {
  return (
    <div className = "Header">
        <h1>Memory Jar</h1>
        <p><em>Preserve the memories that matter</em></p>
        <img src = {memoryJarLogo} alt = "Memory Jar Logo" class = "memory-jar-logo" width = "80" height = "100" />
    </div>
  )
}

export default Header