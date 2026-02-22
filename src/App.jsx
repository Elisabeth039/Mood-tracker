import { useState } from 'react'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <>
    <Header/>

    <div className="main-content">
      <p className="greeting">How are you feeling today, user?</p>
      <div className="sbmBtn-container">
        <button  className="submit-btn">Submit</button>
      </div>
      <div className="mood-container">
        <label htmlFor="mood" className="mood-qn">What's your mood?</label>
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
      <div className="weather-container">
        <label htmlFor="weather" className="weather-qn">How was the weather today?🍂</label>
        <div id="weather" className="weather-btns">
          <button className="wth-emoji">☀️</button>
          <button className="wth-emoji">☁️</button>
          <button className="wth-emoji">🌧️</button>
          <button className="wth-emoji">❄️</button>
          <button className="wth-emoji">🌬️</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
