import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import AddMemory from './pages/AddMemory/AddMemory'
import AddPictures from './pages/AddPictures/AddPictures'
import AddThoughts from './pages/AddThoughts/AddThoughts'
import Pictures from './pages/Pictures/Pictures'
import Thoughts from './pages/Thoughts/Thoughts'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="add-memory" element={<AddMemory/>}/>
    <Route path="add-pictures" element={<AddPictures/>}/>
    <Route path="add-thoughts" element={<AddThoughts/>}/>
    <Route path="/pictures" element={<Pictures />}/>
    <Route path="/thoughts" element={<Thoughts />}/>
    </Routes>
  )
}

export default App
