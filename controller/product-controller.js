const product = require("../service/product-service");


exports.productController = (app) => {
    app.get('/products', product.getAll)
        .post('/products', product.post)
        .put('/products/:pId', product.update)
        .delete('/products/:pId', product.deleteprod)
}