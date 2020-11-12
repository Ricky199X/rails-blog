import React from 'react'

const Comment = (props) => {

    return (
        <div className="comment" key={props.id}>
            <div className="commenter">
                <strong>Commenter:</strong>
                {props.commenter}
            </div>
            <div className="comment-body">
                <strong>Body:</strong>
                {props.body}
            </div>
        </div>
    )
}



export default Comment