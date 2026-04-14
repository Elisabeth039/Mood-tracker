import Calendar from '../components/Calendar.jsx';
import '../App.css';

function MonthReview() {
  return (
    <div className="main-content" >
      <p className="greeting">Your Month in moods</p>
      <p className='heading'>Statistics</p>
      <Calendar/>
    </div>
  );
}

export default MonthReview;