var request = require("request");
var config = require("../config.js");

var login = (req, res) => {
  console.log(config);
  return res.redirect('https://api.instagram.com/oauth/authorize/?client_id='+
                config.client_id+
                '&redirect_uri='+
                config.insta_redirect+
                '&response_type=code');
}

module.exports = {
  login: login
}
