import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InPerson = () => {
  const navigate = useNavigate();

  const handle1Click = () => {
    navigate('/Person1');
  };

  const handle2Click = () => {
    navigate('/Person2');
  };

  const handle3Click = () => {
    navigate('/Person3');
  };

  const handle4Click = () => {
    navigate('/Person4');
  };

  return (
    <div className="container-resources">
      <h1>In-Person Resources</h1>
      <h2>
        Hover over each resource to see which sounds like the best fit for you!{' '}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1cm' }}>
        <Button
          variant="primary"
          onClick={handle1Click}
          title="Easy access to informal and confidential sessions with therapists from UChicago Student Wellness. There’s no need for an appointment and no cost to students."
        >
          Let’s Talk
        </Button>
        <Button
          variant="secondary"
          onClick={handle2Click}
          title="We can help you schedule an initial in-person or virtual appointment with student wellness!"
        >
          Phone Number
        </Button>
        <Button
          variant="secondary"
          onClick={handle3Click}
          title="We can help you send an email to request a Zoom appointment with an expert and hear back within 2 business days!"
        >
          Email
        </Button>

        <Button
          variant="secondary"
          onClick={handle4Click}
          title="Open Studio art therapy is self-directed space for people to spend their time doing creative activities they enjoy (i.e. writing and artmaking). You'll have the freedom to choose the materials you want to work with and the option to stay as long as you would like. "
        >
          Art Therapy
        </Button>
      </div>
    </div>
  );
};

export default InPerson;