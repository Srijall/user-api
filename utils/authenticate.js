const LocalStrategy = require('passport-local').Strategy;
const { UserLogin } = require('../repository/user-repo')


exports.authenticate = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, async (email, password, cb) => {
            const found = await UserLogin(email, password);
            if (found)
                return cb(null, true, {
                    message: "user found"
                });
            return cb(null, false, {
                message: "user not found"
            })
        })
    )
}
