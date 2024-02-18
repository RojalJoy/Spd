import React from 'react';
import './MeetupPage.css';

function MeetupPage() {
  return (
    <>
      <h1 className="meet">MeetUP</h1>
      <div className="container">
        <div className="vectors">
          <img className="vector-below" src={require('./vector-14.svg')} alt="vector-below" />
          <img className="vector-up" src={require('./vector-15.svg')} alt="vector-up" />
          <img className="dog" src={require('./dog-1@2x.png')} alt="dog" />
        </div>
        <div className="feed">
          <div className="feedback">
            <form action="/action_page.php">
              <label htmlFor="name">Name:</label>
              <input type="text" id="fname" name="fname" value="John" /><br /><br />
              <label htmlFor="Date">Date:</label>
              <input type="date" id="date" name="date" /><br /><br />
              <label htmlFor="hotel">Hotel:</label>
              <input type="text" id="hotel" name="hotel" value="" /><br /><br />
              <label htmlFor="pet">Pet:</label>
              <input type="text" id="pet" name="pet" value="" /><br /><br />
              <button>Register</button>
            </form>
          </div>
        </div>
        <h1 className="head">Meet up with other Furry friends</h1>
      </div>
    </>
  );
}

export default MeetupPage;
