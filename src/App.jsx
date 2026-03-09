import { useState, useRef, useEffect } from 'react';
import Header from './components/Header.jsx';
import Notes from './components/Notes.jsx';
import Weather from './components/Weather.jsx';
import Mood from './components/Mood.jsx';
import Submit from './components/Submit.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header/> 
    <div className="main-content">
      <p className="greeting">How are you feeling today, user?</p>
      <Submit/>
      <Mood/>
      <Weather/>
      <Notes/>
    </div>
    </>
  )
}

export default App
