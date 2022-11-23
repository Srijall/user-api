const { DataTypes } = require('sequelize');
const db = require('../config/db_config');

const profilePicModel = db.define('user_profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    profilePic: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, { freezeTableName: true, timestamps: false })

module.exports = profilePicModel;