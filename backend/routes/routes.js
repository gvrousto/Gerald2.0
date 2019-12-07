var router = require("express").Router();
var authorize = require("./authorize");
let wordCloud = require("./wordCloud");

router.get("/", (req, res) => {
  res.send({ success: "true", message: "Connected to Gerald server." });
});

router.get("/instaLogin", authorize.login);
router.get("/instaAuthorized", authorize.authorized);
router.get("/wordCloud", wordCloud.getWordCloudData);
module.exports = router;
