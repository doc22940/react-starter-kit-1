import React, {Component} from 'react'
import AppLayout from './layout/App';
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Routes extends Component {

  render() {
    return <Router>
      <AppLayout>
        <Route path="/" exact component={Home}/>
      </AppLayout>
    </Router>
  }

}