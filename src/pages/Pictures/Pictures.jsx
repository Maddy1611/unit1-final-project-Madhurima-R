import React, { useState } from 'react'
import picturesData from '../../mock-data/mockPictures'
import './Pictures.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Buttons/Button'

function Pictures({pictures, setPictures}) {
  const handleDelete = (id) =>{
    setPictures(pictures.filter((picture)=> picture.id !== id));
  };

  return (
    
    <div className='pictures'>
       <div className='header-box'>
            <Header />
        </div>
      <h3>See what you saw then:</h3>

    <div className='pictures-grid'>
      {pictures.length === 0 ?(
          <p>No pictures have been added yet.</p>
        ):(
      pictures.map((picture)=>(
        <div className='picture-card' key={picture.id}>

          <img
          src={picture.image}
          alt={picture.title}
          />

        <div className='picture-details'>
          <h3>{picture.title}</h3>
          <p>{picture.date}</p>
          <p>{picture.description}</p>
          <p className='pictures.feeling'>
          {picture.emoji}{picture.feeling}
          </p>
          <Button onClick={()=>
            handleDelete(picture.id)}>
              Delete
            </Button>
          </div> 
    </div>
      ))
    )}
</div>
 <div className='footer-box'>
            <Footer />
        </div>
</div>
  )
}

export default Pictures