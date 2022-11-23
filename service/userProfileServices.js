const profileModel = require("../models/user-profile.js")
const { diskStorage } = require("multer");
const multer = require('multer')
const DatabaseFilename = require('../controller/profile-controller')
exports.getAll = async (req, res, next) => {
    try {
        const userPData = await profileModel.findAll();
        return res.status(200).json({ usersProfile: userPData })
    } catch (error) {
        next(error)
    }
}



exports.post = async (req, res, next) => {
    try {
        const { uid, profilePic, occupation } = req.body;
        console.log({ uid, profilePic, occupation })
        await profileModel.findOne({ where: { uid } }) ?
            next('Profile already exists') : null

        await profileModel.create({ uid, profilePic, occupation });

        return res.status(200).json({ message: 'data inserted successfully' })

    } catch (error) {
        next(error)

    }
}
exports.getOne = async (req, res, next) => {
    try {
        const { uid } = req.params;
        const userData = await profileModel.findOne({ where: { uid } })
        return res.status(200)
            .json({
                message: `User with uid= ${uid} `,
                data: userData
            })
    } catch (error) {
        next(error)

    }
}
exports.update = async (req, res, next) => {
    try {
        const { uid } = req.params;
        const { profilePic, occupation } = req.body;
        await profileModel.update({ uid, profilePic, occupation }, { where: { uid } })
        return res.status(200).json({
            message: 'Updated Successfully'
        })
    } catch (error) {
        next(error)
    }
}
exports.delete = async (req, res, next) => {
    try {
        const { uid } = req.params;
        await profileModel.destroy({
            where: { uid }
        })
        return res.status(200).json({
            message: 'deleted Successfully'
        })
    } catch (error) {
        next(error)

    }
}
