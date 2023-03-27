import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Question3 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/InPerson');
  };

  const handleNoClick = () => {
    navigate('/Virtual');
  };

  return (
    <div className="container-resources">
      <h1>Would you like to explore in-person or virtual resources? </h1>
      <div>
        <Button variant="primary" onClick={handleYesClick} className="btn-primary-custom">
          In-person
        </Button>
        <Button variant="secondary" onClick={handleNoClick} className="btn-secondary-custom">
          Virtual
        </Button>
      </div>
    </div>
  );
};

export default Question3;
