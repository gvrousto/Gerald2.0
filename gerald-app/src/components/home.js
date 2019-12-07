import React from 'react';
import logo from '../logo.svg';
import { API_URL } from "../config";
import { apiGet } from "../util/api";
import axios from 'axios';



class Home extends React.Component {
  constructor(props){
    super(props);
    if(props){
      console.log(props);
    }
  }

  componentDidMount(){

  }

  instaGramLogin(){
    axios.get(API_URL + "/instaLogin")
      .then((res) => {

      });
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
