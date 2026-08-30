import React from 'react'
import picturesData from '../../mock-data/mockPictures'
import './Pictures.css'

function Pictures() {
  return (
    <div className='pictures'>
      <h3>See what you saw then:</h3>

    <div className='pictures-grid'>
      {picturesData.map((picture)=>(
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
          </div> 
    </div>
      ))}
</div>
</div>
  )
}

export default Pictures