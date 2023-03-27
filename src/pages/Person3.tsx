import React from 'react';

const sendEmail = () => {
  const email = 'counselingfeedback@bsd.uchicago.edu';
  const subject = 'Subject';
  const body =
    'Hi, My name is [Insert Name Here], a [Insert Year Here] year at UChicago looking to speak with someone from student counseling. I am available on [insert time availability here between 9am-5pm CST M-F]. I would love to begin next week if feasible Thank you so much! [Insert Your Name Here]';
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const Person3: React.FC = () => {
  return (
    <div className="container-resources">
      <h1>Let's email Student Wellness!</h1>
      <button style={{ backgroundColor: '#528aae', marginRight: '10px' }} onClick={sendEmail}>
        Click here to send an email!
      </button>
    </div>
  );
};

export default Person3;
