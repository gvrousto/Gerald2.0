if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = {
  port: process.env.PORT || 5000,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  insta_redirect: process.env.INSTA_REDIRECT,
  clarifai_key: process.env.CLARIFAI_KEY
};
