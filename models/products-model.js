const { DataTypes } = require("sequelize");
const db = require("../config/db_config");

const productModel = db.define("product_Table",
    {
        pId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        details: {
            type: DataTypes.STRING(250),
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        uid: {
            type: DataTypes.INTEGER,

            references:
            {
                model: "user_table",
                key: "uid"
            }
        }
    }, { freezeTableName: true, timestamps: false })

module.exports = productModel;