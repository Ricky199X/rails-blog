import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Article = (props) => {

    const [article, setArticle] = useState({})

    const [comment, setComment] = useState({})
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
    }, [article.length]);

    return loaded ?
        (
            <div className="container">
                <div className="article">
                    <strong>Title: </strong>
                    {article.data.attributes.title}
                </div>
                <div className="text">
                    <strong>Text: </strong>
                    {article.data.attributes.text}
                </div>
                <div className="comments"></div>
                <div className="form">This form is going here</div>
                <div className="buttons">The back and edit buttons will be here</div>
            </div>
        )
        :
        (
            <h1>Loading!!!</h1>
        )
}

export default Article