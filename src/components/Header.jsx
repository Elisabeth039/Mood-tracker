import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import AboutPanel from '../components/AboutPanel.jsx';
import '../App.css';
import '../styles/Header.css';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openPanel = () => setIsOpen(true);
  const closePanel = () => setIsOpen(false);

  return (
    <>
      <div className="header">
        <img 
          src={logo}
          alt="Mood Tracker Logo"
          className="logo"
        />
        <ul className="menu">
          <li>
            <Link to="/">Daily log</Link>
          </li>
          <li>
            <Link to="/month-review">Month review</Link>
          </li>
          <li className="about-us-btn" onClick={openPanel}>
            About us
          </li>
        </ul>
      </div>

      {<AboutPanel isOpen={isOpen} onClose={closePanel} />}
    </>
  );
}