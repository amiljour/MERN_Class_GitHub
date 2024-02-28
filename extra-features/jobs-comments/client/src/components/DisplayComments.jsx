import React from 'react'

const DisplayComments = (props) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th> User name</th>
                        <th> Content</th>
                        <th> Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.comments.map((comment, i) => (
                            <tr key={i}>
                                <td>{comment.username}</td>
                                <td>{comment.content}</td>
                                <td>{comment.rating}</td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>



        </div>
    )
}

export default DisplayComments