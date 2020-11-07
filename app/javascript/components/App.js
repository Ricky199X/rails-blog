import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

// Component Imports
import Welcome from './Welcome'
import Articles from './articles/Articles'
import Article from './articles/Article'

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