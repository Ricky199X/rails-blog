// this will fetch articles from API and render them in a table to the DOM

import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Article from './Article'
import * as ReactBootStrap from 'react-bootstrap'

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

    const listArticles = articles.map(article => {
        return (
            <Article
                key={article.attributes.title}
                id={article.id}
                attributes={article.attributes}
            />
        )
    })

    return (
        <Fragment>
            <h1>Listing Articles</h1>
            <ReactBootStrap.Table responsive="sm bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Show</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {listArticles}
                </tbody>
            </ReactBootStrap.Table>
        </Fragment>
    )
}

export default Articles
