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

  const weatherEmoji = selectedWth 
    ? {
        sunny: '☀️',
        cloudy: '☁️',
        rainy: '🌧️',
        snowy: '❄️',
        windy: '🌬️'
      }[selectedWth]
    : null;

  const handleSubmit = () => {
    if (!selectedWth) {
      alert("Please select weather before submitting!");
      return;
    }

    const newEntry = {
      date: selectedDate,
      mood: mood,
      weather: selectedWth,
      weatherEmoji: weatherEmoji,        
      note: noteText.trim(),
      createdAt: new Date().toISOString()
    };

    let existingEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');

    const existingIndex = existingEntries.findIndex(e => e.date === selectedDate);

    if (existingIndex !== -1) {
      existingEntries[existingIndex] = newEntry;
    } else {
      existingEntries.push(newEntry);
    }

    localStorage.setItem('moodEntries', JSON.stringify(existingEntries));

    alert(`Entry for ${selectedDate} saved successfully!`);

    setMood(5);
    setSelectedWth(null);
    setNoteText('');
  };

  return (
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
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}