var router = require("express").Router();
var instagram = require("./instagram")

router.get("/", (req, res) => {
  res.send({ success: "true", message: "Connected to Gerald server." });
});

router.get("/instaLogin", instagram.login)
module.exports = router;
