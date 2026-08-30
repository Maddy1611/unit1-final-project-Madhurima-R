import React from 'react'
import thoughtsData from '../../mock-data/mockThoughts'
import "./Thoughts.css"

function Thoughts() {
  return (
    <div className='thoughts'>
      <h3>Feel how you felt then-</h3>

    <div className='thoughts-grid'>
      {thoughtsData.map((thoughts) =>(
        <div className='thoughts-card' key={thoughts.id}>
          <h3>{thoughts.title}</h3>
          <p>{thoughts.date}</p>
          <p>{thoughts.thought}</p>
          <p className='thoughts.feeling'>
          {thoughts.emoji}{thoughts.feeling}
          </p>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Thoughts