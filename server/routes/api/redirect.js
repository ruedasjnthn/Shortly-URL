const express = require("express");
const router = express.Router();

// load URL model
const ShortUrl = require("../../models/shortUrl");

// test
// @route GET /api/redirect/test
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

router.get("/", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ shortCode: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  const CHECK_HTTP = /http(s)?:\/\/./g;
  const checkLink = (string) => {
    return string.match(CHECK_HTTP);
  };
  /*if(checkLink(shortUrl.full)){
    res.redirect(shortUrl.full); 
  } else {
      
  }*/ 
  res.redirect("https://" + shortUrl.full);
});

module.exports = router;
