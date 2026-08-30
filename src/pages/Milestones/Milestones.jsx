import React from 'react'
import milestonesData from '../../mock-data/mockMilestone'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Milestones.css"

function Milestones() {
  return (
    <div className='milestones'>
      <div className='header-box'>
            <Header />
        </div>
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
       <div className='footer-box'>
            <Footer />
        </div>
    </div>
  );
}

export default Milestones