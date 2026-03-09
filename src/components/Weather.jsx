import '../App.css'

export default function Weather() {
return(
<div className="weather-container">
        <label htmlFor="weather" className="weather-qn">How was the weather today?🍂</label>
        <div id="weather" className="weather-btns">
          <button id="sun-btn"className="wth-emoji">☀️</button>
          <button className="wth-emoji">☁️</button>
          <button className="wth-emoji">🌧️</button>
          <button className="wth-emoji">❄️</button>
          <button className="wth-emoji">🌬️</button>
        </div>
      </div>
    )
}