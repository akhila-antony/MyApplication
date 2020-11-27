import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Users from './Users'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <Redirect to="/users" />
      </Route>
      <Route path='/users' component={Users} />
    </Switch>
  </main>
)

export default Main
