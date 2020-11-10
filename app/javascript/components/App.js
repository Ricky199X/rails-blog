import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'


// Component Imports
import Welcome from './Welcome'
import Articles from './articles/Articles'
// import Article from './articles/Article'
import Article from './article/Article'
import Comment from './comments/Comment'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/articles' component={Articles} />
            <Route exact path='/articles/:id' component={Article} />
        </Switch>
    )
}

export default App