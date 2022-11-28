const userModel = require("../models/user-model.js")

exports.getAll = async (req, res, next) => {
    try {
        const userData = await userModel.findAll();
        return res.status(200).json({ users: userData })
    } catch (error) {
        next(error)
    }
}
exports.post = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        await userModel.create({ name, email, password });
        return res.status(200).json({ message: 'data inserted successfully' })

    } catch (error) {
        next(error)
    }
}
exports.getOne = async (req, res) => {
    try {
        const { uid } = req.params;
        const userData = await userModel.findOne({ where: { uid } })
        return res.status(200)
            .json({
                message: `User with uid= ${uid} `,
                data: userData
            })
    } catch (error) {
        next(error)

    }
}
exports.update = async (req, res) => {
    try {
        const { uid } = req.params;
        const { name, email, password } = req.body;
        await userModel.update({ name, email, password }, { where: { uid } })
        return res.status(200).json({
            message: 'Updated Successfully'
        })
    } catch (error) {
        next(error)
    }
}
exports.delete = async (req, res) => {
    try {
        const { uid } = req.params;
        await userModel.destroy({
            where: { uid }
        })
        return res.status(200).json({
            message: 'deleted Successfully'
        })
    } catch (error) {
        next(error)
    }
}
