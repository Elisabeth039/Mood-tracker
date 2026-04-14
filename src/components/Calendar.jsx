import {useEffect, useState} from 'react';
import '../styles/Calendar.css'
import '../App.css'

export default function Calendar () {
  const [selectedMonth, setSelectedMonth] = useState (() =>{
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,"0")}`;
  });

  const [days, setDays] = useState([]);

  useEffect(()=> {
    const[year, month] = selectedMonth.split('-').map(Number);
    const totalDays = new Date(year, month, 0).getDate();

    const calendarDays = [];
    for (let day = 1; day <= totalDays; day++) {
      calendarDays.push({ day });
    }

    setDays(calendarDays);
  }, [selectedMonth]);

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
            <div className='day' key={index}>
              {item.day}
          </div>
          ))}
        </div>
    </div>
  );
}
