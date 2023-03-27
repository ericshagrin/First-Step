import React from 'react';

const NoLearn: React.FC = () => {
  return (
    <div className="container-resources">
      <h1>That's fair!</h1>
      <h2>
        If ever do want to learn more about what
        Student Wellness has to offer, feel free to check out the resource compilation below.
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

export default NoLearn;
