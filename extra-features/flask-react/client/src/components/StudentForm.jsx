import React, { useState } from 'react'
import axios from 'axios';
import studentService from '../services/StudentService';

const StudentForm = ({ onCreate }) => {
    const [student, setStudent] = useState({
        name: "",
        email: ""
    });

    // no service
    const handleSubmit2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/students", student)
            .then(res => onCreate(res.data))
            .catch(err => console.log(err))
    }

    // refactored axios config so that the header doesn't need to be repeated in every axios call
    const handleSubmit = (e) => {
        e.preventDefault();
        studentService.createStudent(student)
            .then(res => onCreate(res.data))
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1> Create</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p> Name</p>
                    <input onChange={handleChange} name="name" value={student.name} className="form-control" />
                </div>
                <div>
                    <p> Email</p>
                    <input onChange={handleChange} name="email" value={student.email} className="form-control" />
                </div>
                <button className='btn btn-success'> Submit</button>
            </form>
        </div>
    )
}

export default StudentForm