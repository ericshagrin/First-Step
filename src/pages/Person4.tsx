import React from 'react';

const Person4: React.FC = () => {
  // Function to create the Google Calendar event
  const handleAddToCalendar = () => {
    // Create the URL for the Google Calendar event
    const startDate = '2023-03-30T14:30:00-06:00'; // Use the start time of the Art Therapy Open Studio
    const endDate = '2023-03-30T16:35:00-06:00'; // Use the end time of the Art Therapy Open Studio
    const location = '950 E 61st St, Chicago, IL 60637'; // Use the address of the Student Wellness Center
    const details =
      'Open Studio is a self-directed, community space for people to spend their time doing creative activities they enjoy such as writing and artmaking, while also being able to socialize and/or take a breather. No appointment is necessary, and if you prefer, you do not have to give your name. Join our mailing list to learn more about open studios and events!'; // Use the description of the Art Therapy Open Studio
    const title = "Art Therapy Open Studio"; // Use the title of the Art Therapy Open Studio
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startDate}/${endDate}&location=${location}&details=${details}&text=${title}`;

    // Open the URL in a new tab
    window.open(calendarUrl);
  };

  return (
    <div
      className="container-resources"
      style={{ maxHeight: '80vh', overflowY: 'auto', paddingTop: '50px' }}
    >
      <h1>Art Therapy Open Studio</h1>
      <h2 className="sub-header">
        Open Studio is a self-directed, community space for people to spend their time doing creative activities they enjoy such as writing and artmaking, while also being able to socialize and/or take a breather. You'll have the freedom to choose the materials you want to work with and the option to stay as long as you would like.
      </h2>
      <h3 className="sub-header">
        Art Therapy Open Studios are on Wednesdays from 2:30 - 4:35 pm at the Student Wellness Center (room 1058B). Drop in anytime and stay as long as you'd like!
      </h3>
      <h3 className="sub-header">
        Take a study break and have fun at the Art Therapy Open Studio! 
      </h3>
      <div style={{ display: 'block' }}>
        <button
          onClick={handleAddToCalendar}
        >
          {' '}
          Add to Calendar{' '}
        </button>
      </div>
    </div>
  );
};

export default Person4;
