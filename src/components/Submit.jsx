import '../App.css'
import '../styles/Submit.css'

export default function Submit() {
return(
      <div className="sbmBtn-container">
        <div className="date-pick">
          <label>Submit for: </label>
          <input
            type='date'
            className='date'
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </div>
        <button  className="submit-btn">Submit</button>
      </div>
    )
};