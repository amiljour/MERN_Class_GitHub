import React from 'react'
import { useState } from 'react';
import StudentService from '../services/StudentService';


const EditForm = ({ student, onUpdate }) => {
    const [updatedStudent, setUpdatedStudent] = useState(student);

    const handleSubmit = (e) => {
        e.preventDefault();
        StudentService.updateStudent(updatedStudent)
            .then(() => onUpdate(updatedStudent))
            .catch(err => console.log(err))
    }

    const handleChange = e => {
        setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="row mb-3" >
                <label class="col-sm-1 col-form-label">Name</label>
                <div class="col-sm-4">
                    <input name="name" onChange={handleChange} className="form-control" value={updatedStudent.name} />
                </div>
                <label class="col-sm-1 col-form-label">Email</label>
                <div class="col-sm-4">
                    <input name="email" onChange={handleChange} className="form-control" value={updatedStudent.email} />
                </div>
                <div class="col-sm-2">
                    <button className='btn btn-warning'> Confirm</button>
                </div>
            </div>
        </form>
    )
}

export default EditForm