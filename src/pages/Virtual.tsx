import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Virtual = () => {
  const navigate = useNavigate();

  const handle1Click = () => {
    navigate('/Virtual1');
  };

  const handle2Click = () => {
    navigate('/Virtual2');
  };

  const handle3Click = () => {
    navigate('/Virtual3');
  };

  return (
    <div className="container-resources">
      <h1>Virtual Resources</h1>
      <h2>
        Hover over each resource to see which sounds like the best fit for you!{' '}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1cm' }}>
        <Button
          variant="primary"
          onClick={handle1Click}
          title="We can help you schedule an initial in-person or virtual appointment with student wellness!"
        >
          Phone Number
        </Button>
        <Button
          variant="secondary"
          onClick={handle2Click}
          title="We can help you send an email to request a Zoom appointment with an expert and hear back within 2 business days!"
        >
          Email
        </Button>
        <Button
          variant="secondary"
          onClick={handle3Click}
          title="An app where you have access to 12 free sessions with therapists, along with tons of other virtual resources!"
        >
          Timely Care
        </Button>
      </div>
    </div>
  );
};

export default Virtual;
