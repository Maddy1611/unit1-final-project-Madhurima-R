import React from 'react'
import milestonesData from '../../mock-data/mockMilestone'
import "./Milestones.css"

function Milestones() {
  return (
    <div className='milestones'>
      <h3>Look how you have grown:</h3>
      <div className='milestones-grid'>
        {milestonesData.map((milestone)=> (
          <div className='milestone-card' key={milestone.id}>
          <h2>{milestone.title}</h2>
          <p>{milestone.date}</p>
          <button className='feeling-button'>
            {milestone.emoji}{milestone.feeling}
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones