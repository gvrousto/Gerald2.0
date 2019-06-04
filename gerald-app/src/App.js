import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    token: localStorage.getItem("token")
  };
  var result = fetch(`http://localhost:8000/`, { headers: HEADERS })
    .then(res => res.json())
    .catch(function(error) {
      return error;
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
