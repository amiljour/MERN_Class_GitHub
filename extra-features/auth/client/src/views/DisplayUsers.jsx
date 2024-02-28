import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

const DisplayUsers = () => {
    const [users, setUsers] = useState(null)
    const navigate = useNavigate()
 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/allUsers`, {withCredentials: true})
            .then(res=> setUsers(res.data))
            .catch()
    },[])

    const logoutHandler = ()=>{
        axios.get(`http://localhost:8000/api/logout`, {withCredentials: true})
            .then(res=>navigate("/register"))
            .catch()
    }

    return (
        <div>
            <button onClick={logoutHandler}>Logout</button>

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>email</td>
                        <td>password</td>
                    </tr>
                </thead>
                <tbody>
                    {users&&users.map((user, i)=>(
                        <tr key={i}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))                    
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayUsers
