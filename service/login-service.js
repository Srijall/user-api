const userModel = require("../models/user-model.js")
const jwt = require("jsonwebtoken");
const passport = require("passport");

let token = 0;
const loginToken = (passport) => {
    passport.authenticate('local', { session: false },
        (err, user, info) => {

            if (user) {
                token = jwt.sign(user, "Secret_Token");
            }
        }
    );
}
const loginService = (req, res, next) => {
    // if (token) {
    // return res.status(200).json({
    // token: token
    // })
    // }
    passport.authenticate('local', { session: false },
        (err, user, info) => {
            // loginToken(passport);
            if (user) {
                token = jwt.sign(user, "Secret_Token");
                return res.status(200).json({
                    token: token
                })
            }
            return res.status(400).json({
                message: "user not found"
            })
        }
    )(req, res, next);
}
module.exports = { loginToken, loginService }