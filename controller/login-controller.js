const userModel = require("../models/user-model.js")
const jwt = require("jsonwebtoken");
const { loginToken, loginService } = require("../service/login-service.js");
const LocalStrategy = require('passport-local').Strategy;
let token;
exports.loginController = (app, passport) => {
    app.post('/login', (req, res, next) => {
        return loginService(req, res, next, passport)
    });

}