const blogs = require("../service/blog-service")

exports.blogController = (app) => {
    app.get('/blogs', blogs.getAll)
        .post('/blogs', blogs.post)
        .get('/blogs/:blogID', blogs.getOne)
        .put('/blogs/:blogID', blogs.update)
        .delete('/blogs/:blogID', blogs.delete)
}