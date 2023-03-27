import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Person2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const now = new Date();
    const dayOfWeek = now.getUTCDay();
    const hours = now.getUTCHours() - 6; // Adjust for central time
    const isWeekday = dayOfWeek !== 0 && dayOfWeek !== 6; // 0 is Sunday, 6 is Saturday
    setIsOpen(isWeekday && hours >= 8 && hours < 17); // 8am-5pm central time
  }, []);

  const handleReminder = async () => {
    const time = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours from now
    const data = { phoneNumber, time };
    try {
      await axios.post('/reminders', data); // assuming you have an endpoint to handle reminders
      alert('Reminder set!');
    } catch (error) {
      console.error(error);
      alert('Failed to set reminder :(');
    }
  };

  return (
    <div className="container-resources">
      <h1 style={{ fontSize: '2em' }}>
        Let's call student wellness to set up an appointment!
      </h1>
      <h2>Operating Hours: 8 am - 5 pm</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {isOpen ? (
          <>
            <button style={{ backgroundColor: '#528aae' }}>
              Student Wellness is open right now! Call: 773.834.9355
            </button>
          </>
        ) : (
          <>
            <button
              style={{ backgroundColor: '#528aae' }}
              onClick={() => setShowReminder(true)}
            >
              Student Wellness is not open right now! Click here for a reminder
              to call when they open!
            </button>
          </>
        )}
      </div>
      {showReminder && (
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
        >
          <label style={{ marginRight: '10px' }}>
            Enter your phone number:
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            style={{ backgroundColor: '#528aae', marginLeft: '10px' }}
            onClick={handleReminder}
          >
            Remind me
          </button>
        </div>
      )}
    </div>
  );
};

export default Person2;
