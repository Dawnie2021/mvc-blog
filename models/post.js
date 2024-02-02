const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { allowedNodeEnvironmentFlags } = require('process');

class Post extends Model { }

Post.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        post_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'post',

    }

)

model.exports = Post;