import Calendar from '../components/Calendar.jsx';
import InfoPanel from '../components/InfoPanel.jsx';
import '../App.css';
import { useState } from 'react';

function MonthReview() {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="monthReview-main" >
      <p className="greeting">Your Month in moods</p>
      <p className='heading'>Statistics</p>
      <Calendar onDayClick = {setSelectedDay}/>
      <InfoPanel selectedDay = {selectedDay}/>
    </div>
  );
}

export default MonthReview;