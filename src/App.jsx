import React from 'react'
import Survey from './Component/Survey'
import Start from "./Component/Srart"
import End from './Component/End'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className="App">
      <Routes>
        <Route path="/" element={ <Start/> } />
        <Route path="/start" element={ <Survey/> } />
        <Route path="/end" element={ <End/> } />
      </Routes>
    </div>
    </>
  )
}

export default App