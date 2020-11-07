// this will fetch articles from API and render them in a table to the DOM

import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        // Get all articles from API
        // Update Articles in state 

        const articlesURL = 'http://localhost:3000/api/v1/articles'
        axios.get(articlesURL)
            .then(resp => {
                setArticles(resp.data.data)
            })
            .catch(resp => console.log(resp))

    }, [articles.length])

    const list = articles.map(article => {
        return (
            <li key={article.attributes.title}>
                {article.attributes.title}
            </li>
        )
    })

    return (
        <Fragment>
            <h1>Articles Component</h1>
            <ul>{list}</ul>
        </Fragment>
    )
}

export default Articles