import React from 'react';
import { Link } from 'react-router-dom';
import './../browser.css';
import './../mobile.css'

import Logo from './../components/logo.png';

const HomePage: React.FC = () => {
  return (
    <div className="container-home" style={{ backgroundColor: '#FDF5E6' }}>
      <div className="left-section">
        <h1 className="main-header" style={{ color: '#800000' }}>Take the First Step </h1>
        <h2 className="sub-header" style={{ color: '#800000' }}>
          to the mental health care you want.
        </h2>

      </div>
      <div className="right-section">
        <h2 className="sub-header-alt" style={{ backgroundColor: '#800000', color: '#FDF5E6' }}> find the right uchicago resource for you </h2>
        <Link to="/question1" className="cta-button" style={{ color: '#FDF5E6' }}>get started!</Link>
      </div>
    </div>
  );
};

export default HomePage;