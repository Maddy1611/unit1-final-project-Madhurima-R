import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import AddMemory from './pages/AddMemory/AddMemory'
import AddPictures from './pages/AddPictures/AddPictures'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="add-memory" element={<AddMemory/>}/>
    <Route path="add-pictures" element={<AddPictures/>}/>
    </Routes>
  )
}

export default App
