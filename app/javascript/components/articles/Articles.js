// this will fetch articles from API and render them in a table to the DOM

import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Article from './Article'

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
            <table>
                <tr>
                    <th>Title</th>
                    <th>Text</th>
                </tr>

                <tr>
                    <td key={article.attributes.title}>
                        {article.attributes.title}
                    </td>
                    <td key={article.attributes.text}>
                        {article.attributes.text}
                    </td>
                    <td key={article.attributes.id}>
                        <Link to={`/articles/${article.id}`}
                            key={Math.random()}
                        >
                            Show
                        </Link>
                    </td>
                </tr>
            </table>
        )
    })

    return (
        <Fragment>
            <h1>Listing Articles</h1>
            {list}
        </Fragment>
    )
}

export default Articles