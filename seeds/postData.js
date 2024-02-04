const { Post } = require('../models');

const postData = [
    {
        title: 'What is the best programming language?',
        content: 'HTML is the best programming language',
        user_id: 1,

    },

    {
        title: 'What is the second best programming language?',
        content: 'CSS is the second best programming language',
        user_id: 2,

    },

    {
        title: 'What is the worst programming language?',
        content: 'JavaScript is the worst programming language',
        user_id: 3,

    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
