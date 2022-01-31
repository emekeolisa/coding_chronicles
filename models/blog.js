const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const blogSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('Blog', blogSchema);



// const blogg = new blogModel({
//     header: 'Day 1',
//     content: 'nice one'
// });


// blogg.save();