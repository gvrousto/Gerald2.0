import React from 'react';
import { API_URL } from "../config";


class Home extends React.Component {

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
