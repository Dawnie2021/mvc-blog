const router = require('express').Router();
const { Post } = require('../../models');




router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.redirect("/dashboard");

    } catch (err) {
        res.status(400).json(err);
        
    }
});


module.exports = router;