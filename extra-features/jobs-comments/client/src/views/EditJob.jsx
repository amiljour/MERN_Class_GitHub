// useEffect, useState 
// axios
// useParams

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory, useParams } from 'react-router-dom'

const EditJob = () => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(70000)
  const [remote, setRemote] = useState(true)
  const history =useHistory()


  useEffect(() => {
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(res => {
        const job = res.data
        setTitle(job.title)
        setCompany(job.company)
        setSalary(job.salary)
        setRemote(job.remote)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, remote})
      .then(res=>history.push("/"))
      .catch(err=>console.log(err))
  }

  const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
      .then(res=>history.push("/"))
      .catch(err=>console.log(err))
    // in order to delete, id is needed
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title</label>
          <input type="text" name="title" value={title}
            onChange={e => setTitle(e.target.value)} className="form-control" />
        </div>
        <div>
          <label> Company</label>
          <input type="text" name="company" value={company}
            onChange={e => setCompany(e.target.value)} className="form-control" />
        </div>
        <div>
          <label> Salary</label>
          <input type="number" name="salary" value={salary}
            onChange={e => setSalary(e.target.value)} className="form-control" />
        </div>
        <div>
          <label> Remote? </label>
          <input type="checkbox" name="remote" checked={remote}
            onChange={e => setRemote(e.target.checked)} />
        </div>
        <button className='btn btn-primary btn-block'> Create a new job!</button>
       
      </form>
      <button className="btn btn-danger btn-block" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default EditJob