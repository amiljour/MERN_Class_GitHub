const {Job} = require("../models/job.model")


// get all jobs
module.exports.allJobs = (req, res) => {
    Job.find({})
        .then(jobs=>res.json(jobs))
        .catch(err=>res.status(400).json(err))
}

// get one job
module.exports.oneJob = (req, res) => {
    Job.findOne({_id:req.params.id}).populate("comments")
        .then(oneJob=>res.json(oneJob))
        .catch(err=>res.status(400).json(err))
}


// create a job
module.exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(job=>res.json(job))
        .catch(err=>res.status(400).json(err))
}

// edit a job
module.exports.editJob = (req, res) => {
    Job.findOneAndUpdate({_id:req.params.id},req.body, {new:true, runValidators:true})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}

// delete a job
module.exports.deleteJob = (req, res) => {
    Job.deleteOne({_id:req.params.id})
        .then(response=>res.json(response))
        .catch(err=>res.status(400).json(err))
}


// get all comments of a job
module.exports.getAllComments = (req, res) => {
    Job.findOne({_id: req.params.jobId}).populate('comments')
        .then(foundJob=>res.json(foundJob))
        .catch(err=>res.status(400).json(err))
}

