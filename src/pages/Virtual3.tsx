import React from 'react';
import Timely_Care from './../components/Timely_Care.png';

const TimelyCare: React.FC = () => {
  return (
    <div className="container-resources" style={{ maxHeight: '80vh', overflowY: 'auto', paddingTop: '50px' }}>
      <h1>Let's set up your Timely Care Account!</h1>
      <h2>To start accessing resources:</h2>
      <ol style={{ paddingLeft: '30px', textAlign: 'left' }}>
        <li>Click the button below.</li>
        <li>Click sign-in.</li>
        <li>Create profile using UChicago email!</li>
        <li>Follow the prompts and start your first visit!</li>
      </ol>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <button style={{ backgroundColor: '#528aae', marginBottom: '20px' }}>
          <a
            href="https://app.timelycare.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: '#fff' }}
          >
            Click Here to Set-Up Your Account
          </a>
        </button>
        <h2>
          You can also complete this process on your phone! Scan the QR code to
          download the app.
        </h2>
        <img
          src={Timely_Care}
          alt="Timely Care app QR code"
          width="90"
          height="90"
          style={{ marginBottom: '20px' }}
        />
      </div>
    </div>
  );
};

export default TimelyCare;
