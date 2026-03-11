import '../App.css'
import '../styles/Mood.css'

export default function Mood() {
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
        />
      </div>
    )
};