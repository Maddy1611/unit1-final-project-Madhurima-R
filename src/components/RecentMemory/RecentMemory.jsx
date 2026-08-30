import React from "react";
import "./RecentMemory.css"
import picturesData from "../../mock-data/mockPictures";
import thoughtsData from "../../mock-data/mockThoughts";

function RecentMemory ({memory}) {
return (
    <>
<h2>Look at Your Memories -</h2>
<div className="memory-cards">
    {picturesData.slice(0,2).map((picture) => (
        <div className="memory-card">
            <img src={picture.image} alt={picture.title}/>
            <h3>{picture.title}</h3>
            <p>{picture.description}</p>
          <div className="memory-feeling">
            {picture.emoji}{picture.feeling}
          </div>
        </div>
    ))}

    {thoughtsData.slice(0,2).map((thoughts) =>(
        <div className="memory-card">
            <h3>{thoughts.title}</h3>
            <p>{thoughts.thought}</p>
           <div className="memory-feeling">
            {thoughts.emoji}{thoughts.feeling}
           </div>
        </div>
    ))}
</div>
</>
)
}

export default RecentMemory