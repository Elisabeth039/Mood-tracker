import {useState} from 'react';
import '../App.css'
import '../styles/Mood.css'

export default function Mood() {
  const [mood, setMood] = useState(5);

  const hue = (mood / 10) * 120;
  const thumbColor = `hsl(${hue}, 90%, 50%)`;

  return(
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
        value={mood}
        onChange={(e) => setMood(Number(e.target.value))}
        />
        <div className='mood-number' style={{color:thumbColor}}>
          {mood.toFixed(1)}
        </div>
    </div>
  )
};