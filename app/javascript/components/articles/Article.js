import React from 'react'
import { Link } from 'react-router-dom'

const Article = (props) => {

    console.log(props.title)
    return (
        <div>
            <h1>This is an article</h1>
        </div>
    )
}

export default Article