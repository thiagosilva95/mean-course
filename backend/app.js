const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://thiago:8z27iD2PzEvlIBbJ@cluster0-xumlv.mongodb.net/test?retryWrites=true")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
   });
  console.log(post);
  post.save();
  res.status(201).json({
    message: "Post added successfully",
   })
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
