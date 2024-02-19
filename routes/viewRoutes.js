const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/',  async (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});


router.get('/post', (req, res) => {
  res.render('post');
});

router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll()
    const posts = postData.map(post => post.get({ plain: true }))
    res.render('dashboard', {
      posts
    })
  } catch (err) {
    res.redirect("login")
  }
});



module.exports = router;
