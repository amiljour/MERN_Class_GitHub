const mongoose = require('mongoose');
const Schema = mongoose.Schema

const JobSchema = new Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters"]
    },
    company:{
        type: String,
        required: [true, "Company is required"],
        minlength: [3, "Company must be at least 3 characters"]
    },  
    salary:{
        type: Number,
        required: [true, "Salary is required"],
        min: [70000, "Salary must be at least 70,000"]
    },  
    remote:{
        type: Boolean,
        required: [true, "Remote option is required"]
    },
    // one job can have many comments -- array of schema, ref as "Comment", same name as the schema
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{timestamps: true})

module.exports.Job = mongoose.model('Job', JobSchema)


