var express = require("express");
var router = express.Router();

const fetch = require("node-fetch");

const NEWS_API_KEY = process.env.NEWS_API_KEY;

router.get("/articles", (req, res) => {
  fetch(
    `https://newsapi.org/v2/everything?sources=the-verge&apiKey=${NEWS_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({ articles: data.articles });
    });
});

module.exports = router;
