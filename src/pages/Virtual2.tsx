import React, { useState } from 'react';

const sendEmail = () => {
  const email = 'counselingfeedback@bsd.uchicago.edu';
  const subject = 'Subject';
  const body =
    'Hi, My name is [Insert Name Here], a [Insert Year Here] year at UChicago looking to speak with someone from student counseling virtually. I am available on [insert time availability here between 9am-5pm CST M-F]. I would love to begin next week if feasible Thank you so much! [Insert Your Name Here]';
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const Virtual2: React.FC = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText('counselingfeedback@bsd.uchicago.edu \n \n \n Hi, My name is [Insert Name Here], a [Insert Year Here] year at UChicago looking to speak with someone from student counseling virtually. \n \n I am seeking virtual care. I am available on [insert time availability here between 9am-5pm CST M-F]. \n \n I would love to begin next week if feasible. \n \n Thank you so much! \n \n [Insert Your Name Here]')
  };
  
  return (
    <div       
    className="container-resources"
    style={{ maxHeight: '80vh', overflowY: 'auto', paddingTop: '50px' }}
    >
      <h1>Let's email Student Wellness!</h1>
      <button style={{ backgroundColor: '#528aae', marginRight: '10px' }} onClick={sendEmail}>
        Click here to send an email!
      </button>
      <h2>If you don't have your email set up locally, feel free to copy and paste the template below</h2>
      <button style={{ backgroundColor: '#528aae', marginTop: '20px' }} onClick={handleButtonClick}>
        Click here to display text!
      </button>
      {displayText && (
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontWeight: 'bold' }}>Email:</p>
          <p>{displayText.split('\n')[0]}</p>
          <p style={{ fontWeight: 'bold' }}>Template:</p>
          <p>{displayText.split('\n').slice(2).join('\n')}</p>
        </div>
      )}
    </div>
  );
};

export default Virtual2;
