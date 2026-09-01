import React from 'react'
import { Link } from 'react-router'
import "./Dashboard.css"
import RecentMemory from '../RecentMemory/RecentMemory'
import memoryJarLogo from '../../assets/memory-jar-logo.png'
import milestonesData from '../../mock-data/mockMilestone'

function Dashboard() {
  return (
    <div className='dashboard-main'>
    <div className='dashboard-top'>

    <div className='welcome-card'>
      <h2>Welcome Back!</h2>
      <h3>Your Memory Jar is waiting ➼ </h3>
      <p><em>Fill it with moments & memories, you never want to forget 💕</em></p>
    </div>

    <div className='add-memory-box'>
    <Link to="/add-memory" className='add-memory-button'>
       + Add Memory 💕
    </Link>
    </div>
    </div>

    <div className='recent-memories'>
        <RecentMemory />
    </div>

    <div className='display-milestones'>
      {milestonesData.slice(0,5).map((milestones) =>(
              <div className="display-card" key={milestones.id}>
                  <h3>{milestones.title}</h3>
                  <p>{milestones.date}</p>
                 <div className="memory-feeling">
                  {milestones.emoji}{milestones.feeling}
                 </div>
              </div>
      ))}
    </div>
    </div>
)
}

export default Dashboard