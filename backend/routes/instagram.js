let request = require("request");
let config = require("../config.js");
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: config.clarifai_key
});

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
  .then((body)=> JSON.parse(body))
  .then((body) => imagesPromise(body['access_token']))
  .then((imgArray) => clarifaiPromise(imgArray))
  .then((body) => console.log(body));

  //change this so instead of a redirect it just sends dat back to page
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
      if(err){
        reject(err);
      }else{
        let pBody = JSON.parse(body);
        let imgArray = pBody['data'].map((item) => {
          return item['images']['standard_resolution']['url'];
        });
        resolve(imgArray);
      }
    });
  });
};

let clarifaiPromise = (imgArray) => {
  return new Promise((resolve,reject) =>{
    console.log(imgArray);
    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(generalModel => {
      return generalModel.predict(imgArray);
    })
    .then(response => {
      let concepts = response['outputs'][0]['data']['concepts'];
      concepts = concepts.map((item) => {return item['name']});
      resolve(concepts)
    });
  });
}

module.exports = {
  login: login,
  authorized: authorized
}
