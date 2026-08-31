import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import "./Milestones.css"
import Button from '../../components/Buttons/Button';

function Milestones({milestones, setMilestones}) {
  const handleDelete = (id) =>{
      setMilestones(milestones.filter((milestone)=> milestone.id !== id));
    };
  return (
    <div className='milestones'>
      <div className='header-box'>
            <Header />
        </div>
      <h3>Look how you have grown:</h3>
      <div className='milestones-grid'>
        {milestones.length === 0 ?(
          <p>No milestone have been added yet.</p>
        ):(
        milestones.map((milestone)=> (
          <div className='milestone-card' key={milestone.id}>
          <h2>{milestone.title}</h2>
          <p>{milestone.date}</p>
          <button className='feeling-button'>
            {milestone.emoji}{milestone.feeling}
          </button>
          <Button onClick={()=>
            handleDelete(milestone.id)}>
              Delete
          </Button>
          </div>
        ))
      )}
      </div>
       <div className='footer-box'>
            <Footer />
        </div>
    </div>
  );
}

export default Milestones