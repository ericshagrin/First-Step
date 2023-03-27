import React from 'react';

const EngagedPast: React.FC = () => {
  return (
    <div className="container-resources">
      <h1>That's awesome!</h1>
      <h2>
        If you're still curious or interested in learning more about all that
        Student Wellness has to offer, click the button below!
      </h2>
      <button style={{ backgroundColor: '#528aae', marginTop: '20px' }}>
        <a
          href="https://docs.google.com/document/d/1-otuqRlxkoVUYBRh6zsDnLfrnVfjk7ahS6RwY1phUSs/edit#heading=h.lfetrc4x9buj"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#fff' }}
        >
          Student Wellness Resource Compilation
        </a>
      </button>
    </div>
  );
};

export default EngagedPast;
