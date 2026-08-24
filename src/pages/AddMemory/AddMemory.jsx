import React from "react";
import { Link } from "react-router";

function AddMemory() {
  return (
    <div className="add-memory-page">
        <h2>What type of memory do you want to add</h2>
        <div className="memory-options">
            <Link to="/AddPictures" className="memory-options">
            <h3>Add picture here</h3>
            </Link>
        </div>
    </div>
  )
}

export default AddMemory