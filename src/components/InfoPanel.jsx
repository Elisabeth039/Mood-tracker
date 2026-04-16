import '../styles/InfoPanel.css'
import '../App.css'

export default function InfoPanel({ selectedDay }) {
  
  if (!selectedDay || selectedDay.mood === null) {
    return (
      <div className="info-panel">
        <p className='no-day'>Click on a day with entries in the calendar to see details!</p>
      </div>
    )
  }

  return (
    <div className="info-panel">
      <div className="info-row">
      <span className="info-label">Mood:</span>
      <span className="mood-info">{selectedDay.mood}</span>
    </div>
      <div className="info-row">
      <span className="info-label">Weather:</span>
      <span className="weather-info">
        {selectedDay.weatherEmoji || '-'}
      </span>
    </div>
      <div className='info-notRow' >
      <p className="info-label">Note:</p>
      <span className="note-info">
        {selectedDay.note || 'No note added'}
      </span>
    </div>
    </div>
  );
}