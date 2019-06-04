import React from 'react';
import logo from '../logo.svg';

class Home extends React.Component {
  // const HEADERS = {
  //   Accept: "application/json",
  //   "Content-Type": "application/json",
  //   token: localStorage.getItem("token")
  // };
  // var example = fetch(`http://localhost:8000/instaLogin`, { headers: HEADERS })
  //   .then(res => res.json())
  //   .catch(function(error) {
  //     return error;
  //   });
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="http://localhost:5000/instaLogin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
