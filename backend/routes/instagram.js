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
  console.log(req.query['code']);
  return res.redirect('http://localhost:3000/instaAuthorized');
}

module.exports = {
  login: login,
  authorized: authorized
}
