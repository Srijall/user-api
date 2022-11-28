const { DataTypes } = require("sequelize");
const db = require("../config/db_config");

const orderModel = db.define("order_table",
    {
        oId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        uid: {
            type: DataTypes.INTEGER,

            references:
            {
                model: "user_table",
                key: "uid"
            }
        }
    }, { freezeTableName: true, timestamps: true })

module.exports = productModel;