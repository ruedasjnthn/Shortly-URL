const express = require("express");
const router = express.Router();
const shortid = require("shortid");

// load URL model
const ShortUrl = require("../../models/shortUrl");

// test
// @route GET /api/shorten/test
router.get("/test", (req, res) => res.json({ msg: "API is working" }));

// @route GET /api/shorten/
router.post("/", async (req, res) => {
  const shortCode = shortid.generate();
  const baseUrl = "https://s-3.herokuapp.com";
  const full = req.body.full;
  const short = baseUrl + '/' + shortCode;

  const shortUrl = new ShortUrl({
    full,
    short,
    shortCode
  })

  await shortUrl.save();

  res.json({ shortUrl });
});

module.exports = router;
