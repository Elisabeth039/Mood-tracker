import '../App.css'

export default function Notes() {
   return(
    <div className="note-container">
        <label htmlFor='notes' className='note-qn'>Quick note about anything</label>
        <div className="note-paper">
          <textarea
            className="notes"
            id="notes"
            placeholder='Anything on your mind...'
            rows={8}
          />
        </div>
      </div>
   )
};