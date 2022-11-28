const profile = require("../service/userProfileServices")
const { uploadMiddleware } = require('../utils/fileUploadMiddelware')


let profileController = (app) => {
    app.get('/user-profile', profile.getAll)
        .post('/user-profile', uploadMiddleware.single('profilePic'), profile.post)
        .get('/user-profile/:uid', profile.getOne)
        .put('/user-profile/:uid', profile.update)
        .delete('/user-profile/:uid', profile.delete);

}
module.exports = { profileController }