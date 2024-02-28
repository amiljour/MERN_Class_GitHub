import { useState } from "react"
import React from 'react'
import StudentService from "../services/StudentService";
import EditForm from "./EditForm";


const Dashboard = ({ students, onUpdate, onDelete }) => {
    const [updateId, setUpdateId] = useState(-1)

    const handleDelete = (id) => {
        StudentService.deleteStudent(id)
            .then(() => onDelete(id))
            .catch(err => console.log(err))
    }

    const handleUpdate = updatedStudent => {
        setUpdateId(-1);
        onUpdate(updatedStudent);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Name</th>
                    <th> Email</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => (
                        <tr key={student.id}>
                            <td> {student.id} </td>
                            <td> {student.name} </td>
                            <td> {student.email} </td>
                            <td>
                                {
                                    updateId === student.id ?
                                        <EditForm student={student} onUpdate={handleUpdate} /> :
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-warning" onClick={() => setUpdateId(student.id)} > Edit</button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(student.id)} > Delete</button>
                                        </div>
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Dashboard