import React from 'react';

const Person1: React.FC = () => {
  // Function to create the Google Calendar event
  const handleAddToCalendar = () => {
    // Create the URL for the Google Calendar event
    const startDate = '2023-03-06T13:00:00-06:00'; // Use the start time of the Let's Talk session
    const endDate = '2023-03-06T14:00:00-06:00'; // Use the end time of the Let's Talk session
    const location = '5710 S Woodlawn Ave, Chicago, IL 60637'; // Use the address of the Let's Talk session
    const details =
      'Let’s Talk provides easy access to free, informal, and confidential consultations with therapists from UChicago Student Wellness. No appointment is necessary, and if you prefer, you do not have to give your name.'; // Use the description of the Let's Talk session
    const title = "Let's Talk session"; // Use the title of the Let's Talk session
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&location=${location}&details=${details}&text=${title}`;

    // Open the URL in a new tab
    window.open(calendarUrl);
  };

  return (
    <div
      className="container-resources"
      style={{ maxHeight: '80vh', overflowY: 'auto', paddingTop: '50px' }}
    >
      <h1>Let's Talk!</h1>
      <h2 className="sub-header">
        Let’s Talk provides easy access to free, informal, and confidential
        consultations with therapists from UChicago Student Wellness. No
        appointment is necessary, and if you prefer, you do not have to give
        your name.
      </h2>
      <h1>Spring 2023 Sessions</h1>
      <h2 className="sub-header">
        1. Mondays, 1-2 pm,{' '}
        <a href="https://www.google.com/maps?q=5710+S+Woodlawn+Ave,+Chicago,+IL+60637">
          {' '}
          Center for Identity + Inclusion, 5710 S Woodlawn Ave, Room 301
        </a>
        <div style={{ display: 'block' }}>
          <button
            onClick={handleAddToCalendar}
            style={{ fontSize: '0.7em', padding: '3px 8px' }}
          >
            {' '}
            Add to Calendar{' '}
          </button>
        </div>
      </h2>
      <h2 className="sub-header">
        2. Fridays, 3-4 pm,{' '}
        <a href="https://www.google.com/maps?q=924+E+57th+St,+Chicago,+IL+60637">
          LCSW | Biological Sciences Learning Center, 924 E. 57th St, Room 305
        </a>
        <div style={{ display: 'block' }}>
          <button
            onClick={handleAddToCalendar}
            style={{ fontSize: '0.7em', padding: '3px 8px' }}
          >
            {' '}
            Add to Calendar{' '}
          </button>
        </div>
      </h2>
    </div>
  );
};

export default Person1;
