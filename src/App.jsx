import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import AddMemory from './pages/AddMemory/AddMemory'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="add-memory" element={<AddMemory/>}/>
    </Routes>
  )
}

export default App
