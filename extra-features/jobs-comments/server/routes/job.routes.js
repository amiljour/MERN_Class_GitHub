const JobController = require("../controllers/job.controller")
const CommentController = require("../controllers/comment.controller")

module.exports = (app)=>{
    app.get("/api/jobs", JobController.allJobs)
    app.get("/api/jobs/:id", JobController.oneJob)
    app.post("/api/jobs", JobController.createJob)
    app.put("/api/jobs/:id", JobController.editJob)
    app.delete("/api/jobs/:id", JobController.deleteJob)

    // all routes for comments
    app.get("/api/jobs/:jobId/comments", JobController.getAllComments)
    app.get("/api/comments/:jobId", CommentController.commentsOfOneJob)
    app.post("/api/comments/:jobId", CommentController.addComment3)
    app.get("/api/comments", CommentController.allComments)
}