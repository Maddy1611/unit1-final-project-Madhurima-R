import React from 'react'
import { Link } from 'react-router'
import RecentMemory from '../RecentMemory/RecentMemory'

function Dashboard() {
  return (
    <>
    <div className='welcome-card'>
      <h2>Welcome Back</h2>
      <h3>Memories are created here!</h3>
    </div>
    <br/>

    <Link to="/add-memory" className='add-memory-button'>
       + Add Memory
    </Link>
    <br/>

    <div className='recent-memories'>
        <RecentMemory />
        <p>memory component goes here - still working on that</p>
    </div>
    </>
)
}

export default Dashboard