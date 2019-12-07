import React from 'react';
import { API_URL } from "../config";
import axios from 'axios';

class WordCloud extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wordCloudData:null
    };
  }

  componentDidMount(){
    if(this.props){
      this.getWordCloudData(this.props.match.params.token);
    }
  }

  getWordCloudData(token){
    axios({
        url: API_URL+'/wordCloud',
        method: 'get',
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        }
     })
     .then(response => {
        console.log(response)
     })
     .catch(err => {
        console.log(err);
     });
  }

  render() {
    return (
      <div>
        <p>HAH</p>
      </div>
    );
  }

}

export default WordCloud;
