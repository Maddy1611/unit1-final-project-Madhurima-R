import React from "react";
import { Link } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './AddMemory.css'

function AddMemory() {
  return (
    <div className="add-memory-page">
      <div className='header-box'>
            <Header />
        </div>
        <div className="add-memory-main">
        <h2><em>What type of memory do you want to add</em></h2>
        <ul className="memory-options">
            <Link to="/add-pictures">
            <h3><li>Add picture</li></h3>
            </Link>
            <Link to="/add-thoughts">
            <h3><li>Add thoughts</li></h3>
            </Link>
            <Link to="/add-milestones">
            <h3><li>Add milestones</li></h3>
            </Link>
        </ul>
        </div>
        <div className='footer-box'>
            <Footer />
        </div>
    </div>
  )
}

export default AddMemory