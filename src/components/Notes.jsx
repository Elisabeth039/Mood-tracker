import { useState, useRef, useEffect } from 'react';
import '../App.css'
import '../styles/Notes.css'

export default function Notes() {
  const [noteText, setNoteText] = useState('');
  const textAreaRef = useRef(null);

  useEffect(() =>{
    const ta = textAreaRef.current;
    if (!ta) return;

    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';
  }, [noteText]);
  
   return(
    <div className="note-container">
        <label htmlFor='notes' className='note-qn'>Quick note about anything</label>
        <div className="note-paper">
          <textarea
            ref={textAreaRef}
            className="notes"
            id="notes"
            placeholder='Something on your mind...'
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
        </div>
      </div>
   )
};