import React from "react";
import { Link } from "react-router";

function AddMemory() {
  return (
    <div className="add-memory-page">
        <h2>What type of memory do you want to add</h2>
        <div className="memory-options">
            <Link to="/add-pictures" className="memory-options">
            <h3>Add picture</h3>
            </Link>
            <Link to="/add-thoughts" className="memory-options">
            <h3>Add thoughts</h3>
            </Link>
        </div>
    </div>
  )
}

export default AddMemory