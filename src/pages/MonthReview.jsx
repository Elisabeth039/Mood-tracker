import Calendar from '../components/Calendar.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import StatCards from '../components/StatCards.jsx';
import '../App.css';
import { useState } from 'react';

function MonthReview() {
   const [selectedMonth, setSelectedMonth] = useState (() =>{
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,"0")}`;
  });
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="monthReview-main" >
      <p className="greeting">Your Month in moods</p>
      <p className='heading'>Statistics</p>
      <Calendar onDayClick = {setSelectedDay} selectedMonth={selectedMonth} 
        setSelectedMonth={setSelectedMonth}/>
      <InfoPanel selectedDay = {selectedDay}/>
      <StatCards selectedMonth={selectedMonth}/>
    </div>
  );
}

export default MonthReview;