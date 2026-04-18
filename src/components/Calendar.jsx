import {useEffect, useState} from 'react';
import '../styles/Calendar.css'
import '../App.css'

export default function Calendar ({onDayClick, selectedMonth, setSelectedMonth}) {

  const [days, setDays] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);

 useEffect(() => {
  const [year, month] = selectedMonth.split('-').map(Number);
  const totalDays = new Date(year, month, 0).getDate();

  const existingEntries = JSON.parse(localStorage.getItem('moodEntries') || '[]');

  const calendarDays = [];

  for (let day = 1; day <= totalDays; day++) {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const entry = existingEntries.find(e => e.date === dateStr);

    calendarDays.push({
      day,
      mood: entry ? entry.mood : null,
      weather: entry ? entry.weather : null,
      weatherEmoji: entry ? entry.weatherEmoji : null,
      note: entry ? entry.note : null
    });
  }

  setDays(calendarDays);
}, [selectedMonth]);

  const handleDayClick = (dayObj, index) =>{
    setSelectedDayIndex(index);
    onDayClick(dayObj);
  }

  return (
    <div className="calendar-container">
        <input
        className='month-picker'
        type='month'
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        />
        <div className='calendar'>
          {days.map((item, index) => (
            <div 
            key={index}
            className={`day ${item.mood !== null ? 'data-day' : 'noData-day'}
            ${selectedDayIndex === index ? 'selected-day' : ''}`}
            onClick={() => handleDayClick(item, index)}
            style={{
              '--mood-color': item.mood !== null 
              ? `hsl(${(item.mood /10) * 120}, 80%, 50%)`
              : '#ffb08267'
            }}
            >
              {item.day}
          </div>
          ))}
        </div>
    </div>
  );
}
