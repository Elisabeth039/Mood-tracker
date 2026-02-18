import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <>
    <Header/>

    <div className="main-content">
      <p className="greeting">How are you feeling today, user?</p>
      <div className="mood-container">
        <label htmlFor="mood" className="mood-qstn">What's your mood?</label>
        <input
        type='range'
        id='mood'
        className="mood-slider"
        min={0}
        max={10}
        step={0.1}
        defaultValue={5}
        />
      </div>
    </div>
    </>
  )
}

export default App
