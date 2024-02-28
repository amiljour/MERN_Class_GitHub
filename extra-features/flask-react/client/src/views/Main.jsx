import React, { useState, useEffect } from 'react'
import Dashboard from '../components/Dashboard'
import StudentForm from '../components/StudentForm'
import StudentService from '../services/StudentService'

const Main = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudents()
            .then(res => setStudents(res.data))
            .catch(err => console.log(err.response))
    }, [])

    const addToDOM = student => {
        setStudents([...students, student])
    }

    const removeFromDOM = (id) => {
        setStudents(students.filter(student => student.id != id))
    }

    const updateDOM = updatedStudent => {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student))
    }

    return (
        <div className='container mt-5'>
            <Dashboard students={students} onDelete={removeFromDOM} onUpdate={updateDOM} />
            <StudentForm onCreate={addToDOM} />
        </div>
    )
}

export default Main