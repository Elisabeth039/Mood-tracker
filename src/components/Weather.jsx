import { useState } from 'react'
import '../App.css'

export default function Weather() {
  const [selectedWth, setSelectedWth] =useState(null);

  const weathers = [
    {emoji: '☀️', value: 'sunny', id: 'sunny-btn'},
    {emoji: '☁️', value: 'cloudy'},
    {emoji: '🌧️', value: 'rainy'},
    {emoji: '❄️', value: 'snowy'},
    {emoji: '🌬️', value: 'windy'},
  ];

return(
<div className="weather-container">
        <label htmlFor="weather" className="weather-qn">How was the weather today?🍂</label>
        <div id="weather" className="weather-btns">
          {weathers.map((w) =>(
            <button
            key={w.value}
            id={w.id}
            className={`wth-emoji ${selectedWth === w.value ? 'selected-wth' : ''}`}
            onClick={() => {
              setSelectedWth(
                selectedWth === w.value ? null : w.value);
              }}
            >
              {w.emoji}
          </button>
          )
        )}
        </div>
      </div>
    )
}