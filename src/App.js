import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
    console.log('env==>', process.env.REACT_APP_API_URL)
    if (process.env.API_URL ) {
       console.log('env==>', process.env.REACT_APP_API_URL)
    }
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
