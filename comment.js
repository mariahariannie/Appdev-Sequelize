const {DataTypes} = require("sequelize");
const db = require("../connection");

const comments = db.sequelize.define("comments",{
    comment_id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
    comment_body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

exports.model = comments;
