const profile = require("../service/userProfileServices")
const { diskStorage } = require("multer");
const multer = require('multer')
const upload = require("../service/userProfileServices")
let DatabaseFilename;
// storage engine
const multerDiskStorage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        // unique file name generator by upload time
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // extract file type 
        const filetype = file.mimetype.split("/")[1]
        // console.log(filetype);
        // cb(null, "newFile.jpg")
        // console.log(file)
        Filename = file.fieldname + '-' + uniqueSuffix + '.' + filetype;

        cb(null, Filename)
    }
})
// multer file filter 
const uploadMiddleware = multer({
    storage: multerDiskStorage,
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        // console.log(req.file);
        console.log(file);
        const mimetype = file.mimetype;
        if (mimetype !== 'image/png') {
            cb(new Error("unknown file type"), false);
        }
        cb(null, true);
    }
})



let profileController = (app) => {
    app.get('/user-profile', profile.getAll)
        .post('/user-profile', uploadMiddleware.single('profilePic'), profile.post)
        .get('/user-profile/:uid', profile.getOne)
        .put('/user-profile/:uid', profile.update)
        .delete('/user-profile/:uid', profile.delete);

}
module.exports = { profileController }