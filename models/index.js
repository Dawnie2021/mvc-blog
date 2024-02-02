const User = require('./User');
const Post = require('./post')


User.hasMany(Post, {
    foreignKey: 'user_id'
});


Post.belongsTo(User, {
    foreignKey: 'user_id',
    OnDelete: 'cascade'
})


module.exports = { User, Post };
