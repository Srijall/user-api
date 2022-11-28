const userModel = require("../models/user-model");


exports.UserLogin = async (email, password) => {
    return await userModel.findOne({ where: { email: email, password: password } });
}
