import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to my Blog!!</h1>
            <Link to='/articles'>My Blog</Link>
        </div>
    )
}

export default Welcome