import React, { useState } from 'react'
import thoughtsData from '../../mock-data/mockThoughts'
import "./Thoughts.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Buttons/Button'


function Thoughts({thoughts, setThoughts}) {
    const handleDelete = (id) =>{
      setThoughts(thoughts.filter((thoughts)=> thoughts.id !== id));
    };
  return (
    <div className='thoughts'>
      <div className='header-box'>
            <Header />
        </div>
      <h3>Feel how you felt then-</h3>

    <div className='thoughts-grid'>
      {thoughts.map((thoughts) =>(
        <div className='thoughts-card' key={thoughts.id}>
          <h3>{thoughts.title}</h3>
          <p>{thoughts.date}</p>
          <p>{thoughts.thought}</p>
          <p className='thoughts.feeling'>
          {thoughts.emoji}{thoughts.feeling}
          </p>
          <Button onClick={()=>
            handleDelete(thoughts.id)}>
              Delete
          </Button>
          </div>
      ))}
    </div>
     <div className='footer-box'>
            <Footer />
        </div>
    </div>
  )
}

export default Thoughts