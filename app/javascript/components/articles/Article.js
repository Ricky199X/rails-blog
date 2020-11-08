import React from 'react'
import { Link } from 'react-router-dom'

const Article = (props) => {

    return (
        <tr key={props.attributes.title}>
            <td>{props.attributes.title}</td>
            <td>{props.attributes.text}</td>
            <td>
                <Link to={`/articles/${props.id}`}>
                    View Article
                </Link>
            </td>
            <td>
                Edit
            </td>
        </tr>
    )
}

export default Article

