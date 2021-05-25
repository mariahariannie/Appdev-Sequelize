const {DataTypes} = require("sequelize");
const db = require("../connection");

const threads = db.sequelize.define("threads",{
    threadId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
      threaduuid:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      thread_title:{
       type: DataTypes.STRING,   
       allowNull: false,
      },
      thread_body: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "threads"
 });

 exports.model = threads;