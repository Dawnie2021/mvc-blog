const User = require('./User');
const Post = require('./Post')


User.belongsTo(Post, {
    foreignKey: "user_id"
   
 
  });
  
  Post.belongsTo(User, {
    foreignKey: "post_id"
  
  });
  
  
  






module.exports = { User, Post };


