import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import AddMemory from './pages/AddMemory/AddMemory'
import picturesData from './mock-data/mockPictures'
import AddPictures from './pages/AddPictures/AddPictures'
import thoughtsData from './mock-data/mockThoughts'
import AddThoughts from './pages/AddThoughts/AddThoughts'
import milestonesData from './mock-data/mockMilestone'
import AddMilestones from './pages/AddMilestones/AddMilestones'
import Pictures from './pages/Pictures/Pictures'
import Thoughts from './pages/Thoughts/Thoughts'
import Milestones from './pages/Milestones/Milestones'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {
  const[pictures, setPictures] = useState(picturesData);
  const[thoughts, setThoughts] = useState(thoughtsData);
  const[milestones, setMilestones] = useState(milestonesData);
  const addPicture = (newPicture) => {
    setPictures((prevPictures)=>[
      ...prevPictures,
      newPicture
    ]);
  };
  const addThought = (newThought)=>{
    setThoughts((prevThoughts)=>[
    ...prevThoughts,
    newThought
  ]);
  };
  const addMilestones = (newMilestone)=>{
    setMilestones((prevMilestones)=>[
      ...prevMilestones,
      newMilestone
    ]);
  };


  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="add-memory" element={<AddMemory/>}/>
    <Route path="add-pictures" element={<AddPictures addPicture={addPicture}/>}/>
    <Route path="add-thoughts" element={<AddThoughts addThought={addThought}/>}/>
    <Route path="add-milestones" element={<AddMilestones addMilestone={addMilestones}/>}/>
    <Route path="/pictures" element={<Pictures pictures={pictures} setPictures={setPictures}/>}/>
    <Route path="/thoughts" element={<Thoughts thoughts={thoughts} setThoughts={setThoughts}/>}/>
    <Route path="/milestones" element={<Milestones milestones={milestones} setMilestones={setMilestones}/>}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    <Route path="/contactus" element={<ContactUs />}/>
    </Routes>
  )
}

export default App
