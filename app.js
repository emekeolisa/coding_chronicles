const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs')
const path = require('path')

const mongoose = require('mongoose')
const appController = require('./controllers/app');
const mongoConnect = require('./util/database');
// const mongoConnect = require('./util/database').mongoConnect;


const app = express();

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/deleteBlog/', appController.deleteBlog)

app.post('/editBlog/', appController.editBlogPost)

app.get('/editBlog/:blogId', appController.editBlog)


app.use('/blogPage/:blogId', appController.getBlogDetail)

app.use('/write', appController.addBlogForm);

app.use('/blog', appController.postBlog);

app.use(['/', '/home'], appController.homePage);








app.use((req, res, next) => {
    res.status(404).send('Error , Page not found');
    // console.log(req.body);
});

app.use((err, req, res, next) => {
    res.status(500).send('Something went wrong');
    // console.log(req.body);
});
mongoose.connect('mongodb://localhost:27017/olisablog')
    .then(() => {
        app.listen(3000, function() {
            console.log('server is now running on 3000')
        });
    })
    .catch(err =>
        console.log(err))

// mongoConnect(() => {
//     app.listen(3000, function() {
//         console.log('server is now running on 3000')
//     });
// })