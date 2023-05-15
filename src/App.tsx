import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Virtual1 from './pages/Virtual1';
import Virtual2 from './pages/Virtual2';
import Virtual3 from './pages/Virtual3';
import Person1 from './pages/Person1';
import Person2 from './pages/Person2';
import Person3 from './pages/Person3';
import Person4 from './pages/Person4';
import NoLearn from './pages/NoLearn';
import EngagedPast from './pages/EngagedPast';
import Virtual from './pages/Virtual';
import InPerson from './pages/InPerson';
import Header from './components/Header';
import Footer from './components/Footer';
import './browser.css';
import './mobile.css'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Header />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/Question1" element={<Question1 />} />
              <Route path="/Question2" element={<Question2 />} />
              <Route path="/Question3" element={<Question3 />} />
              <Route path="/Virtual1" element={<Virtual1 />} />
              <Route path="/Virtual2" element={<Virtual2 />} />
              <Route path="/Virtual3" element={<Virtual3 />} />
              <Route path="/Person1" element={<Person1 />} />
              <Route path="/Person2" element={<Person2 />} />
              <Route path="/Person3" element={<Person3 />} />
              <Route path="/Person4" element={<Person4 />} />
              <Route path="/NoLearn" element={<NoLearn />} />
              <Route path="/EngagedPast" element={<EngagedPast />} />
              <Route path="/Virtual" element={<Virtual/>} />
              <Route path="/InPerson" element={<InPerson />} />
            </Routes>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
