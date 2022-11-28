const users = require("../service/user-service")

exports.userController = (app) => {
    app.get('/user', users.getAll)
        .post('/user', users.post)
        .get('/user/:uid', users.getOne)
        .put('/user/:uid', users.update)
        .delete('/user/:uid', users.delete)
}
