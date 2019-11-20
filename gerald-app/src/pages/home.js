import React from 'react';
import logo from '../logo.svg';
import { API_URL } from "../config";
import { apiGet } from "../util/api";


class Home extends React.Component {

  componentDidMount(){
    apiGet()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href={API_URL + "/instaLogin"}>
            <button>
              Button
            </button>
          </a>
        </header>
      </div>
    );
  }

}

export default Home;
