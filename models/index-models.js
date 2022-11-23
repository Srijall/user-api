const userModel = require('./user-model');
const userPmodel = require('./user-profile');
const blogModel = require('./blog-model');
exports.registerModel = (db) => {



    // profilePicModel.sync({ alter: true });

    db.sync({ alter: true });


    // user and post assocaiton
    // one to many
    userModel.hasMany(blogModel, {
        foreignKey:
            { name: 'uid' }
    })
    blogModel.belongsTo(userModel, {
        foreignKey:
            { name: 'uid' },
        onDelete: 'restrict',
        onUpdate: 'restrict'
    })

    // user and profile pic associations
    // one to one
    userModel.hasOne(userPmodel, {
        foreignKey:
            { name: 'uid' }
    })
    userPmodel.belongsTo(userModel, {
        foreignKey:
            { name: 'uid' },
        // onDelete: 'restrict',
        // onUpdate: 'restrict'
    })
}