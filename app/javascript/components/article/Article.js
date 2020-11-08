import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Article = (props) => {

    const [article, setArticle] = useState({
        title: '',
        text: ''
    })

    const [comment, setComment] = useState({
        commenter: '',
        body: ''
    })

    useEffect(() => {
        const articleId = props.match.params.id
        const url = `/api/v1/articles/${articleId}`

        axios.get(url)
            .then(resp => {
                setArticle(resp.data)
            })
            .catch(resp => console.log(resp))
    }, [article.length]);


    return (
        <div className="container">
            <div className="article"></div>
            <div className="comments"></div>
            <div className="form">This form is going here</div>
            <div className="buttons">The back and edit buttons will be here</div>
        </div>
    )
}

export default Article