const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    username:{
        type: String,
    },
    content:{
        type: String,
    },  
    rating:{
        type: Number,
    },  
    job: {
        type: Schema.Types.ObjectId,
        ref: "Job"
    }
},{timestamps: true})


module.exports.Comment = mongoose.model('Comment', CommentSchema)