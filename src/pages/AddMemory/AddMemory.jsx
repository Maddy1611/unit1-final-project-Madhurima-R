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
        <div className="memory-options">
            <Link to="/add-pictures" className="memory-options">
            <h3>Add picture</h3>
            </Link>
            <Link to="/add-thoughts" className="memory-options">
            <h3>Add thoughts</h3>
            </Link>
            <Link to="/add-milestones" className="memory-options">
            <h3>Add milestones</h3>
            </Link>
        </div>
        </div>
        <div className='footer-box'>
            <Footer />
        </div>
    </div>
  )
}

export default AddMemory