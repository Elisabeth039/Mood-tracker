import {useState} from 'react';
import Header from './components/Header.jsx';
import Notes from './components/Notes.jsx';
import Weather from './components/Weather.jsx';
import Mood from './components/Mood.jsx';
import Submit from './components/Submit.jsx';
import './App.css';

function App() {
  const [mood, setMood] = useState(5);
  const [selectedWth, setSelectedWth] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  return (
    <>
      <Header/> 
    <div className="main-content">
      <p className="greeting">How are you feeling today, user?</p>
      <Submit
        mood={mood} setMood={setMood}
        electedWth={selectedWth} setSelectedWth={setSelectedWth}
        noteText={noteText} setNoteText={setNoteText}
        selectedDate={selectedDate} setSelectedDate={setSelectedDate}
      />
      <Mood
        mood={mood}
        setMood={setMood}
      />
      <Weather
        selectedWth={selectedWth} setSelectedWth={setSelectedWth}
      />
      <Notes
        noteText={noteText} setNoteText={setNoteText}
      />
    </div>
    </>
  )
}

export default App
