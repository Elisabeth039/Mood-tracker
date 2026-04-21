import '../styles/AboutPanel.css';

export default function AboutPanel({ isOpen, onClose }) {
  return (
    <>
      <div className={`about-panel ${isOpen ? 'open' : ''}`}>
        <div className="about-header">
          <h2>About this project</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="about-content">
          <p>Hi, I'm Lisa. Glad to see you here!</p>
          
          <p>
            I built this Mood Tracker while learning React. 
            It's a simple and clean app that helps me track my daily mood, 
            weather, and notes.
          </p>

          <p>
            This is a personal project made purely for fun and practice. 
            Feel free to explore, use it, or even take inspiration from it!
          </p>

          <div className="about-links">
            <a 
              href="https://github.com/Elisabeth039/Mood-tracker" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Design on Figma →
            </a>
          </div>

          <div className="about-footer">
            Made with ❤️ and lots of patience
          </div>
        </div>
      </div>

      <div 
        className={`backdrop ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
      ></div>
    </>
  );
}