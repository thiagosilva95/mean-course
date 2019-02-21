const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Header",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: "afasp02340", title: "First server-side post", content: "This is coming from the server" },
    { id: "aasd32fas0", title: "Second server-side post", content: "This is coming from the server!" },
  ]
  res.status(200).json({
    message: "Post fetched succesfully!",
    posts: posts
  });
});

module.exports = app;
