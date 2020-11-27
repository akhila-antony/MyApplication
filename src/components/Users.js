import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullUsers from './FullUsers'
import User from './User'
import UserTab from './UserTab'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/users' component={FullUsers} />
    <Route path='/users/:tab' component={User} />
    {/* <Route path='/users/:userId/:tab' component={UserTab} /> */}
  </Switch>
)


export default Roster
