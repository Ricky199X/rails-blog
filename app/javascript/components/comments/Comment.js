import React from 'react'

const Comment = (props) => {
    console.log(`hello world`)
    return (
        <div className="comment" key={props.id}>
            <div className="commenter">Commenter: {props.commenter}</div>
            <div className="comment-body">Body: {props.body}</div>
        </div>
    )
}



export default Comment