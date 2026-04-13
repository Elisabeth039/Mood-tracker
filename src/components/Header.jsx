import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import '../App.css'
import '../styles/Header.css'

export default function Header() {
  return (
    <div className= "header">
            <img 
              src={logo}
              alt="Mood Tracker Logo"
              className="logo"
            />
            <ul className = "menu">
              <li>
                <Link to="/">Daily log</Link>
              </li>
              <li>
                <Link to="/month-review">Year review</Link>
              </li>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
            </ul>
          </div>
  )
};
