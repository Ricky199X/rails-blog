import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Article = (props) => {

    const [article, setArticle] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const articleId = props.match.params.id
        const url = `/api/v1/articles/${articleId}`

        axios.get(url)
            .then(resp => {
                setArticle(resp.data)
                setLoaded(true)
            })
            .catch(resp => console.log(resp))
    }, [])

    // map comments array
    const displayComments = () => {
        return article.included.map(comment => {
            return (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    commenter={comment.attributes.commenter}
                    body={comment.attributes.body}
                />
            )
        })
    }

    const handleChange = (event) => {
        event.preventDefault()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return loaded ?
        (
            <Fragment>
                <div className="container">

                    <div className="article">
                        <strong>Title: </strong>
                        {article.data.attributes.title}
                    </div>


                    <div className="text">
                        <strong>Text: </strong>
                        {article.data.attributes.text}
                    </div>

                    <div className="comments">
                        <h3>Comments: </h3>
                        {displayComments()}
                    </div>


                    <div className="comment-section">
                        <CommentForm />
                    </div>


                    <div className="buttons">
                        <Button variant="link">
                            <Link to='/articles'>Back</Link>
                        </Button>

                        <Button variant="link">Edit</Button>

                    </div>


                </div>
            </Fragment>
        )
        :
        (
            <div className="container">
                <h1>Loading!!!</h1>
            </div>
        )
}

export default Article