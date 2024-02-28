// grab info from backend - axios
// get info when the page is loaded - useEffect, useState

// attach Link
import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [jobs, setJobs] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs`)
      .then(res=>setJobs(res.data))
      .catch(err=>console.log(err))
  },[])

  // grab the id from html
  // use this id to delete
  const handleDelete = (deleteId)=>{
    axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
      .then(res=>{
        const filteredJobs = jobs.filter((job)=>job._id !== deleteId)
        setJobs(filteredJobs)
      })
      .catch(err=>console.log(err))
  }


  return (
    <div>
      <Link to="/jobs/new"> Create a new job</Link>
      {
        jobs?
          <table className='table'>
            <thead>
              <tr>
                <th> Title</th>
                <th> Company</th>
                <th> Salary</th>
                <th> Remote?</th>
                <th colSpan={2}> Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job, i)=>(
                  <tr key={i}>
                    <td> <Link to={`/jobs/${job._id}`}>{job.title}</Link></td>
                    <td> {job.company}</td>
                    <td> {job.salary}</td>
                    <td> {job.remote?"Yes":"No"}</td>
                    <td> <Link className="btn btn-success" to={`/jobs/edit/${job._id}`}>Edit</Link></td>
                    <td> <button className="btn btn-danger" onClick={()=>handleDelete(job._id)}>Delete (filter)</button></td>
                  </tr>
                ))
              }

            </tbody>

          </table>:
        <h1> There is no job available. Please add more jobs</h1>
      }
    </div>
  )
}

export default Dashboard