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
              <li>Daily log</li>
              <li>Year review</li>
              <li>About us</li>
            </ul>
          </div>
  )
};
