var request = require("request");
var config = require("../config.js");

var login = (req, res) => {
  return res.redirect('https://api.instagram.com/oauth/authorize/?client_id='+
                config.client_id+
                '&redirect_uri='+
                config.insta_redirect+
                '&response_type=code');
}

var authorized = (req, res) => {
  let code = req.query['code'];
  tokenPromise(code).then((body)=>{
    console.log(body);
  });
  return res.redirect('http://localhost:3000/instaAuthorized');
}

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

  console.log(options);

  return new Promise( (resolve,reject) => {
    request.post(options, function(err, resp, body) {
      if(err){
        reject(err);
      }else{
        resolve(body)
      }
    });
  })
}
module.exports = {
  login: login,
  authorized: authorized
}
