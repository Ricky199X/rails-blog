import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Comment from '../comments/Comment'

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
            console.log(comment)
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
                        <strong>Comments: </strong>
                        {displayComments()}
                    </div>
                    <div className="form">This form is going here</div>
                    <div className="buttons">The back and edit buttons will be here</div>
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