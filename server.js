
const express = require('express');
const db = require('./config/db_config');
const { blogController } = require('./controller/blog-controller');
const { profileController } = require('./controller/profile-controller');
const { userController } = require('./controller/user-controller');
const notfound = require('./exception/notfound');
const errorException = require('./exception/error.exception');
const { registerModel } = require('./models/index-models');


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
const PORT = 3000;


// controllers
userController(app);
profileController(app);
blogController(app);

// error middleware
app.use(notfound)
app.use(errorException)



// server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})