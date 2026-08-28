import React from 'react'

function FeelingsButton({feeling, emoji, selectedFeeling, setSelectedFeeling}) {
  return (
    <button
    type="button"
    className={selectedFeeling === feeling? "selected":""}
    onClick={()=> setSelectedFeeling(feeling)}
    >
        {emoji}{feeling}
    </button>
  )
}

export default FeelingsButton