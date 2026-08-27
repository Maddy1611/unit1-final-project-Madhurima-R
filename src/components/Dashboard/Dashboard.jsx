import React from 'react'
import { Link } from 'react-router'
import "./Dashboard.css"
import RecentMemory from '../RecentMemory/RecentMemory'

function Dashboard() {
  return (
    <div className='dashboard-main'>
    <div className='dashboard-top'>

    <div className='welcome-card'>
      <h2>Welcome Back</h2>
      <h3>Memories are created here!</h3>
    </div>
    <br/>

    <Link to="/add-memory" className='add-memory-button'>
       + Add Memory
    </Link>
    <br/>
    </div>

    <div className='recent-memories'>
        <RecentMemory />
    </div>
    </div>
)
}

export default Dashboard