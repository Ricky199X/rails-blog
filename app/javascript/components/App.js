import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

// Component Imports
import Welcome from './Welcome'
import Articles from './articles/Articles'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/articles' component={Articles} />
        </Switch>
    )
}

export default App