import '../App.css'
import '../styles/Submit.css'

export default function Submit({
   mood,
   setMood,
   selectedWth,
   setSelectedWth,
   noteText,
   setNoteText,
   selectedDate,
   setSelectedDate
}) {

const handleSubmit = () => {
  const newEntry = {
    date: selectedDate,
    mood: mood,
    weather: selectedWth,
    note: noteText.trim(),
    createdAt: new Date().toISOString()
  }

  const existingEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]' );

  const updatedEntries = [...existingEntries, newEntry];
  localStorage.setItem('moodEntries', JSON.stringify(updatedEntries));

  alert(`Entry for ${selectedDate} saved successfully!`);

  setMood(5);
  setSelectedWth(null);
  setNoteText('');
}

return(
      <div className="sbmBtn-container">
        <div className="date-pick">
          <label>Submit for: </label>
          <input
            type='date'
            className='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <button  className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    )
};