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
      <div>
        <a href={API_URL + "/instaLogin"}>
          <button>
            Button
          </button>
        </a>
      </div>
    );
  }

}

export default Home;
