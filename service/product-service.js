
const productModel = require('../models/products-model');

const getAll = async (req, res, next) => {
    try {
        const products = await productModel.findAll();
        return res.status(200).json(
            {
                products: products
            }
        );
    } catch (error) {
        next(error)
    }
}
const post = async (req, res, next) => {
    try {
        const { name, details, price, quantity, uid } = req.body;
        await productModel.create({ name, details, price, quantity, uid });
        return res.status(200).json(
            {
                message: "Successfully added the product"
            })
    } catch (error) {
        next(error);
    }
}
const update = async (req, res, next) => {
    try {
        const { name, details, price, quantity } = req.body;
        const { pId } = req.params;
        await productModel.update({ name, details, price, quantity }, { where: { pId } });
        return res.status(200).json({
            message: "Successfully updated product"
        })
    } catch (error) {
        next(error);
    }
}

const deleteprod = async (req, res, next) => {
    try {
        const { pId } = req.params;
        await productModel.destroy({ where: { pId } });
        return res.status(200).json({
            message: "product deleted successfully"
        })

    } catch (error) {
        next(error);
    }
}
module.exports = { getAll, post, update, deleteprod };