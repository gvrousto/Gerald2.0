var request = require("request");
var config = require("../config.js");

//user logs in and we get their code to pass on for auth
var login = (req, res) => {
  return res.redirect('https://api.instagram.com/oauth/authorize/?client_id='+
                config.client_id+
                '&redirect_uri='+
                config.insta_redirect+
                '&response_type=code');
}

//gets auth code
var authorized = (req, res) => {
  tokenPromise(req.query['code'])
  .then((body)=> JSON.parse(body))
  .then((body)=>{
    imagesPromise(body['access_token']);
  });
  return res.redirect('http://localhost:3000/instaAuthorized');
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

let imagesPromise = (token) => {
  // TODO: Increase number of images if at all possible
  let options = {
    url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=30`,
  };
  return new Promise((resolve,reject) => {
    request.get(options, (err, resp, body) => {
      let pBody = JSON.parse(body);
      let imgArray = pBody['data'].map((item) => {
        return item['images']['standard_resolution']['url'];
      });
      console.log(imgArray);
    });
  });
};

module.exports = {
  login: login,
  authorized: authorized
}
