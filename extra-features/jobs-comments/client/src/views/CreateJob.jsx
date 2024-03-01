// form -- input (useState)
// post data to backend (axios)
// after submission, redirect to dashboard (useHistory)
import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const CreateJob = () => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(70000)
  const [remote, setRemote] = useState(true)
  const history = useHistory()
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    axios.post(`http://localhost:8000/api/jobs`, {title, company, salary, remote})
      .then(res=> history.push("/")) // successful --> redirect
      .catch(err=> {
        const errResponse = err.response.data.errors
        console.log(errResponse)
        let errArr =[]
        for(const key of Object.keys(errResponse)){
          errArr.push(errResponse[key].message)
        }
        setErrors(errArr)
      })
  }

  const clearForm =() =>{
    setCompany("")
    setTitle("")
    setSalary(70000)
    setRemote(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title</label>
          <input type="text" name="title" value={title}
            onChange={e=>setTitle(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Company</label>
          <input type="text" name="company" value={company}
            onChange={e=>setCompany(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Salary</label>
          <input type="number" name="salary" value={salary}
            onChange={e=>setSalary(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Remote? </label>
          <input type="checkbox" name="remote" checked={remote}
            onChange={e=>setRemote(e.target.checked)}/>
        </div>
        <button className='btn btn-primary btn-block'> Create a new job!</button>
        <button type="button" className = 'btn btn-default btn-block' onClick={clearForm}> Cancel</button>
      </form>
      {
        errors.map((err, i)=>(
          <p style={{color:"red"}} key={i}> {err}</p>
        ))
      }
    </div>
  )
}

export default CreateJob