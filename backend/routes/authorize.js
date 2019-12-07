let request = require("request");
let config = require("../config.js");
const Clarifai = require('clarifai');

//user logs in and we get their code to pass on for auth
let login = (req, res) => {
  return res.redirect('https://api.instagram.com/oauth/authorize/?client_id='+
                config.client_id+
                '&redirect_uri='+
                config.insta_redirect+
                '&response_type=code');
}

//gets auth code
let authorized = (req, res) => {
  tokenPromise(req.query['code'])
    .then((dataString)=> JSON.parse(dataString))
    .then((dataJson)=>{
      return res.redirect("http://localhost:3000/authorized/"+dataJson.access_token);
    });
}

//handles posting request to instagram with code for authorization
let tokenPromise = (code) => {
  let options = {
    url: 'https://api.instagram.com/oauth/access_token',
    form: {
      client_id: config.client_id,
      client_secret: config.client_secret,
      grant_type: 'authorization_code',
      redirect_uri: config.insta_redirect,
      code: code,
    }
  };
  return new Promise((resolve,reject) => {
    request.post(options, (err, resp, body) => {
      if(err){
        reject(err);
      }else{
        resolve(body);
      }
    });
  })
};

module.exports = {
  login: login,
  authorized: authorized,
}
