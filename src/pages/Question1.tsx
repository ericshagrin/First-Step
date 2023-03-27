import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../index.css';

const Question1 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/EngagedPast');
  };

  const handleNoClick = () => {
    navigate('/Question2');
  };

  return (
    <div className="container-resources">
      <h1>Have you engaged with student counseling in the past? </h1>
      <div className="buttons">
        <Button variant="primary" onClick={handleYesClick} className="btn-primary-custom">
          Yes
        </Button>
        <Button variant="secondary" onClick={handleNoClick} className="btn-secondary-custom">
          No
        </Button>
      </div>
    </div>
  );
};

export default Question1;
