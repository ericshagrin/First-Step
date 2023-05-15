import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Question2 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/Question3');
  };

  const handleNoClick = () => {
    navigate('/NoLearn');
  };

  return (
    <div className="container-resources" >
      <h1>Do you want to learn more about the resources available?</h1>
      <div>
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

export default Question2;
