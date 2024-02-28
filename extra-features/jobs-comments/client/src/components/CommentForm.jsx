import React, {useState} from 'react'
import axios from "axios"

const CommentForm = (props) => {

    const [username, setUsername] = useState("")
    const [content, setContent] = useState("")
    const [rating, setRating] = useState(10)

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/comments/${props.jobId}`, {username, content, rating, job: props.jobId})
            .then(res=>props.onNewComment())
            .catch(err=>console.log("failed"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Username</label>
                    <input type="text" name="username" value={username}
                        onChange={e => setUsername(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label> Content</label>
                    <input type="text" name="content" value={content}
                        onChange={e => setContent(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label> Rating</label>
                    <input type="number" name="rating" value={rating}
                        onChange={e => setRating(e.target.value)} className="form-control" />
                </div>
                
                <button className='btn btn-primary btn-block'> Add a comment</button>
            </form>


        </div>
    )
}

export default CommentForm