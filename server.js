
const express = require('express');
const db = require('./config/db_config');
const { blogController } = require('./controller/blog-controller');
const { profileController } = require('./controller/profile-controller');
const { userController } = require('./controller/user-controller');
const { loginController } = require('./controller/login-controller');
const notfound = require('./exception/notfound');
const errorException = require('./exception/error.exception');
const { registerModel } = require('./models/index-models');
const passport = require('passport');
const { authenticate } = require('./utils/authenticate');
const { productController } = require('./controller/product-controller');

require('dotenv').config();

// check connection to database
let connection = async () => {
    try {
        await db.authenticate('connected');
    }
    catch (error) {
        console.log(error);
    }
}
connection();
// register models and associations
registerModel(db);



// express app 
const app = express();
app.use(express.json());
const PORT = process.env.DEV_PORT;

app.use(passport.initialize());

authenticate(passport)
// controllers
userController(app);
profileController(app);
blogController(app);
productController(app);
loginController(app, passport);
// error middleware
app.use(notfound)
app.use(errorException)



// server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})