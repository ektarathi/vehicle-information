import React from 'react';
import './App.scss';
import './assets/scss/base.scss';
import CarMakeType from './components/CarMakeType';

function App() {
  return (
    <div className="app">
      <h1>An application for getting car information.</h1>
      <p> Please select the value from list in order to get the information about the vehicle of your choice.</p>
      <CarMakeType />
    </div>
  );
}

export default App;
