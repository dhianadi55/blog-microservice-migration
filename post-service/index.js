const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect('mongodb://mongo-post/posts');

app.use(express.json());

app.post('/posts', async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.listen(3002);