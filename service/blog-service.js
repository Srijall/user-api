const blogModel = require("../models/blog-model.js");
const blogSchema = require("../validator/blog.validator.js");

exports.getAll = async (req, res, next) => {
    try {
        const blogData = await blogModel.findAll();
        return res.status(200).json({ blogs: blogData })
    } catch (error) {
        next(error)
    }
}
exports.post = async (req, res, next) => {
    try {
        const { title, description, uid } = req.body;
        await blogSchema.create.validateAsync({ title, description });

        await blogModel.create({ title, description, uid });
        return res.status(200).json({ message: 'data inserted successfully' })

    } catch (error) {
        next(error)

    }
}
exports.getOne = async (req, res, next) => {
    try {
        const { blogID } = req.params;
        await blogSchema.checkParams.validateAsync({ id });

        const blogData = await blogModel.findOne({ where: { blogID } })
        return res.status(200)
            .json({
                message: `User with id= ${blogID} `,
                data: blogData
            })
    } catch (error) {
        next(error)
    }
}
exports.update = async (req, res, next) => {
    try {
        const { blogID } = req.params;
        const { title, description } = req.body;
        await blogSchema.edit.validateAsync({ title, description });

        await blogModel.update({ title, description }, { where: { blogID } })
        return res.status(200).json({
            message: 'Updated Successfully'
        })
    } catch (error) {
        next(error)

    }
}
exports.delete = async (req, res, next) => {
    try {
        const { blogID } = req.params;
        await blogModel.destroy({
            where: { blogID }
        })
        return res.status(200).json({
            message: 'deleted Successfully'
        })
    } catch (error) {
        next(error)

    }
}
