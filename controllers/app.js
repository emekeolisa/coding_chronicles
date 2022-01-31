const Blog = require('../models/blog');



exports.addBlogForm = (req, res, next) => {
    // res.send(fs.readFileSync(path.join(__dirname, 'views', 'index.html')));
    // fs.createReadStream(path.join(__dirname, 'views', 'index.html')).pipe(res);

    res.render('add-blog');
};


exports.postBlog = (req, res, next) => {
    // console.log('saved successfully')
    // console.log(req.body);
    // const header = req.body.header;
    // const content = req.body.content;

    const blog = new Blog({
        header: req.body.header,
        content: req.body.content
    })
    blog.save().then(result => { res.redirect('/'); })
        .catch(err => console.log(err))




};


exports.homePage = (req, res, next) => {

    Blog.find()
        .then(blogs => {
            res.render('index', { writeBlog: blogs })
        })
        .catch(err => console.log(err))
        // res.send(fs.readFileSync(path.join(__dirname, 'views', 'index.html')));
        // fs.createReadStream(path.join(__dirname, 'views', 'index.html')).pipe(res);
        // const blogs = Blog.findAll();
        // res.render('index', { writeBlog: blogs })
};
exports.getBlogDetail = (req, res, next) => {

    Blog.findById(req.params.blogId).then(blogs => {
            res.render('blogDetail', { blog: blogs })
        }).catch(err => console.log(err))
        // res.render('blogDetail', { blog: blogs[0] })
        // console.log(blogs)
        // to render details page
        // res.render('index', { writeBlog: blogs })
};

exports.editBlog = (req, res, next) => {

    Blog.findById(req.params.blogId)
        .then(blogs => {
            res.render('editBlog', { blog: blogs })
        }).catch(err => console.log(err))


    // to render details page
    // res.render('index', { writeBlog: blogs })
};

exports.editBlogPost = (req, res, next) => {
    Blog.findByIdAndUpdate(req.body.id)
        .then(oldBlog => {
            oldBlog.header = req.body.header;
            oldBlog.content = req.body.content;
            return oldBlog.save();
        })
        .then(result => {
            res.redirect('/blogPage/' + req.body.id);
        }).catch(err => console.log(err))
        // Get the details using req.body


    // to render details page
    // res.render('index', { writeBlog: blogs })
};

exports.deleteBlog = (req, res, next) => {
    // Get the id details using req.body
    Blog.deleteOne({ _id: req.body.id })
        .then(result => {
            res.redirect('/')
        }).catch(err => console.log(err))


    // to render details page
    // res.render('index', { writeBlog: blogs })
};