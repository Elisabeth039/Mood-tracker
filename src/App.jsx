import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import DailyLog from './pages/DailyLog.jsx';
import MonthReview from './pages/MonthReview.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<DailyLog />} />
        <Route path="/month-review" element={<MonthReview />} />
      </Routes>
    </>
  );
}

export default App;